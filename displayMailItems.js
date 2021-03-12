function displayMailItems(mailBoxList, parentContainer) {
    this.mailBox = mailBoxList;
    this.init = function () {
        this.createMailBox();
    }
    
    this.createMailBox = function () {

        var mailBoxParent = document.createElement("section");
        mailBoxParent.className = "mailBoxParent";
        
        var mailBoxTable = document.createElement("table");
        mailBoxTable.className = "mailBoxTable";

        this.mailBoxTbody = document.createElement("tbody");
        this.mailBoxTbody.id = "mailBoxTbody";
        
        this.content = document.createElement("div");
        this.content.className = "content";
        
        var commonDiv = document.createElement("div")
        commonDiv.className = "control-container";

        this.commonCheck = document.createElement("input");
        this.commonCheck.type = "checkbox";
        this.commonCheck.className = "checkCommon";

        this.deleteIconCommon = document.createElement("button");
        this.deleteIconCommon.textContent = "delete";
        this.deleteIconCommon.className = "delete";
        this.deleteIconCommon.disabled = true;

        mailBoxParent.append(commonDiv);
        commonDiv.append(this.commonCheck, this.deleteIconCommon);

        document.body.appendChild(this.content);
        mailBoxTable.appendChild(this.mailBoxTbody);
        mailBoxParent.appendChild(mailBoxTable);
        parentContainer.appendChild(mailBoxParent);
        
        for (const key in this.mailBox) {
            this.check = document.createElement("input");
            this.check.type = "checkbox";
            this.check.className = "check";

            var deleteIcon = document.createElement("button");
            this.deleteIcon = deleteIcon;
            this.deleteIcon.textContent = "delete";
            this.deleteIcon.className = "delete";
            this.deleteIcon.disabled = true;

            var actParent = document.createElement("tr");
            actParent.className = key;
            this.mailBoxTbody.appendChild(actParent);

            // if (key != "content") {
            //     actParent.prepend(this.check);
            //     var right = document.createElement("td");
            //     right.className = key;
            //     right.textContent = this.mailBox[key];
            //     actParent.appendChild(right);
            //     actParent.appendChild(this.deleteIcon);
            // }
            // else {
            //     actParent.setAttribute("data-content", this.mailBox[key]);
            // }

            for (const iterator in this.mailBox[key]) {
                if (iterator != "content") {
                    actParent.prepend(this.check);
                    var right = document.createElement("td");
                    right.className = iterator;
                    right.textContent = this.mailBox[key][iterator];
                    actParent.appendChild(right);
                    actParent.appendChild(this.deleteIcon);
                }
                else {
                    actParent.setAttribute("data-content", this.mailBox[key][iterator]);
                }
            }

            var clickInstance = new clickEvents(this.content, this.deleteIconCommon);

            actParent.onclick = function (e) {
                clickInstance.replaceData(e.currentTarget);
            }

            this.check.onclick = function (e) {
                e.stopPropagation();
                // console.log(self.clickInstance);
                clickInstance.enableDeleteIcons(e);
            }

            this.deleteIcon.onclick = function (e) {
                clickInstance.deleteNode(e);
            }

            this.commonCheck.onclick = function (e) {
                clickInstance.selectAll(e, this.deleteIcon);
            }.bind(this);

            this.deleteIconCommon.onclick = function (e) {
                clickInstance.deleteAll(e);
                this.commonCheck.checked = false;
                this.disabled = true;
                // commonCheck.disabled = true;
            }
        }
    }
    this.init();
}