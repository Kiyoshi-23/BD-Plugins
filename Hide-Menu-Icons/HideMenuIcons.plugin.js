/**
* /@name HideMenuIcons
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
