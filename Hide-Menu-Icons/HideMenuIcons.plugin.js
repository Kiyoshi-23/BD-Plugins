/**
* @name HideMenuIcons
* @author Kiyoshi
* @version 1.0
* @description Slides the menu icons in the far-left of your discord with the click of a mouse for a much more clear view.

* @website https://github.com/Kiyoshi-23/BD-Plugins
* @source https://github.com/Kiyoshi-23/BD-Plugins/blob/main/Hide-Menu-Icons/HideMenuIcons.plugin.js
* @updateUrl https://raw.githubusercontent.com/Kiyoshi-23/BD-Plugins/main/Hide-Menu-Icons/HideMenuIcons.plugin.js
*/

const config = {
  info: {
    id: "HideMenuIcons",
    name: "Hide-Menu-Icons",
    description: "Slides the menu icons in the far-left of your discord with the click of a mouse for a much more clear view",
    version: "1.0",
    author: "Kiyoshi",
    updateUrl: "https://raw.githubusercontent.com/Kiyoshi-23/BD-Plugins/main/Hide-Menu-Icons/HideMenuIcons.plugin.js"
  },
  constants: {
    cssStyle: "HideMenuStyle",
    parentID: "menusParent",
    buttonID: "menusButton",
    buttonHidden: "menusHidden",
    buttonVisible: "menusVisible",
    hideElementName: "hideMenuElement"
    forceWidth: "forceIconWidth",
    animationTime: 300
  }
}

class HideMenuIcons {
  getName() { return config.info.name; }
  getDescription() { return config.info.description; }
  getVersion() { return config.info.version; }
  getAuthor() { return config.info.author; }

  // Now, we need to create a function to inject the CSS. This includes the button CSS inside a long string.  
  // We could just use it as a long string but we can define it to use it multiple times. 
  injectCSS = `#${config.constants.buttonID} {
          width: 13px;
          min-width: 13px;
          height: 13px;
          min-height: 13px;
          display: flex;
          cursor: pointer;
          opacity: 1;
      }

      // How the button will look in the user area. 
      .theme-dark #${config.constants.buttonID}.${config.constants.buttonVisible} {
        background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+CgkJCgkJCgkJCgkJCgkJPHBhdGggZD0iTTguNTkgMTYuNTlMMTMuMTcgMTIgOC41OSA3LjQxIDEwIDZsNiA2LTYgNi0xLjQxLTEuNDF6IiBmaWxsPSIjYjliYmJlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KCTwvc3ZnPg==) no-repeat;
      }

      .theme-dark #${config.constants.buttonID}.${config.constants.buttonHidden} {
        background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTcuMTE1KzE1LjcwNUwxMS43MDUrMTEuMTI1TDE2LjI5NSsxNS43MDVMMTcuNzA1KzE0LjI5NUwxMS43MDUrOC4yOTVMNS43MDUrMTQuMjk1QzUuNzA1KzE0LjI5NSs3LjExNSsxNS43MDUrNy4xMTUrMTUuNzA1WiIgZmlsbD0iIzRmNTY2MCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+) no-repeat;
      }

      .theme-light #${config.constants.buttonID}.${config.constants.buttonVisible} {
        background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+CgkJCgkJCgkJCgkJCgkJPHBhdGggZD0iTTguNTkgMTYuNTlMMTMuMTcgMTIgOC41OSA3LjQxIDEwIDZsNiA2LTYgNi0xLjQxLTEuNDF6IiBmaWxsPSIjYjliYmJlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KCTwvc3ZnPg==) no-repeat;
        opacity: 0.75;
      }

      .theme-light #${config.constants.buttonID}.${config.constants.buttonHidden} {
        background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTcuMTE1KzE1LjcwNUwxMS43MDUrMTEuMTI1TDE2LjI5NSsxNS43MDVMMTcuNzA1KzE0LjI5NUwxMS43MDUrOC4yOTVMNS43MDUrMTQuMjk1QzUuNzA1KzE0LjI5NSs3LjExNSsxNS43MDUrNy4xMTUrMTUuNzA1WiIgZmlsbD0iIzRmNTY2MCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+) no-repeat;
        opacity: 0.75;

      ${config.constants.forceWidth} {
            width: 0px;
      }
      
      #${config.constants.hideElementName} {
        trasform: translateX(200px);
        opacity: 0;
      }

      }`
  
  // Mouse Functions 
  mouseclickFunc = (e) => this.toggleIcons();
  mouseenterFunc = (e) => this.toggleIcons(false, "entry");
  mouseleaveFunc = (e) => this.toggleIcons(false, "exit");


  start() {
    // Getting the User Area
    let PanelButton = Bdapi.findModuleByDisplayName("PanelButton")
    let node = Bdapi.getInternalInstance(document.querySelector(".panels-3wFtMD > .container-YkUktl")).return?.stateNode
    // Patch
    Bdapi.Patcher.after("HideMenuIcons", node.__proto__, "render", (_, __,{ props }) => {
      // Add button
      props.children[2].props.children.unshift(Bdapi.Reace.createElement(PanelButton, {
        icon: () => "SVG",
        tooltipText: "Tooltip Text".
        // Now, we need the console to log that the button was clicked.
        onClick: () => console.log("Clicked!")
      }))
    })
    node.forceUpdate()

    // Updater
    if (!global.ZeresPluginLibrary != null) {
      global.ZeresPluginLibrary.PluginUpdater.checkForupdate(config.info.name, config.info.version, config.info.updateUrl)
    }
  

  initialize() {
      this.iconsHiddenBool = Bdapi.loadData(config.info.id, "hidden");
      this.hoverBool = Bdapi.loadData(config.info.id, "hover");

      // If there is any CSS, we need to clear it. 
      Bdapi.clearCSS(config.constants.cssStyle);
      // And Inject it back.
      Bdapi.injectCSS(config.constants.cssStyle, this.injectCSS);

      }
    }

  stop() {
    // Clear CSS to end the program
    Bdapi.clearCSS(config.constants.cssStyle);
  }
}
