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
