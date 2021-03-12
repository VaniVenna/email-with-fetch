function leftPanel(menuItems, mailContainer) {
    this.listItems = menuItems;
    this.init = function () {
        this.createMenuItems();
    }
    this.createMenuItems = function() {
        this.menuItems = document.createElement("ul");
        this.menuItems.id = "menuItems";
        for(var i = 0; i< this.listItems.length; i++){
            var menuItem = document.createElement("li");
            menuItem.className = this.listItems[i].mailBoxTitle;
            menuItem.id = this.listItems[i].mailBoxID;
            menuItem.textContent = this.listItems[i].mailBoxTitle;
            this.menuItems.appendChild(menuItem);
        }
        mailContainer.appendChild(this.menuItems);
        
    }
    // this.loadMailItems = function(targetMailBox, mailItems) {
    //     this.content.innerHTML = "";
    //     switch(targetMailBox.id) {
    //         case "inboxId": this.displayMailContent(mailItems[0].inbox);
    //         break;
    //         case "sentId": this.displayMailContent(mailItems[0].sent);
    //         break;
    //         case "draftId": this.displayMailContent(mailItems[0].draft);
    //         break;
    //         case "spamId": this.displayMailContent(mailItems[0].spam);
    //         break;
    //         default: this.displayMailContent(mailItems[0].inbox);
    //     }
    // }
    this.displayMailContent = function(mailBoxList) {
        var removeChild = document.getElementById("mailBoxTbody");
        if (removeChild.childNodes.length > 0)
            removeChild.innerHTML = "";

        new displayMailItems(mailBoxList, this.mailBoxTbody, this.content, this.commonCheck, this.deleteIconCommon);
    }
    this.init();
}