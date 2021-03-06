"use strict";

var getLabel = function (sText, sLabelFor) {
        if (sLabelFor) {
            return new sap.m.Label({
                text: sText,
                labelFor: sLabelFor
            })
        } else {
            return new sap.m.Label({
                text: sText
            })
        }
    },
    getLabelWithSelect = function (sValue) {
        return new sap.ui.layout.VerticalLayout({
            content: [getLabel(sValue), getSelect(10)]
        })
    },
    getLabelWithSelectCombo = function (iCount) {
        var aLabelCombos = [];

        for (var i = 0; i < iCount; i++) {
            aLabelCombos.push(getLabelWithSelect("Something Something" + i));
        }

        return aLabelCombos;
    },
    getSelectItem = function (iNumber) {
        return new sap.ui.core.Item({
            text: "Content " + ++iNumber,
            key: iNumber
        });
    },
    getSelect = function (iCount) {
        var aSelectItems = [];

        for (var i = 0; i < iCount; i++) {
            aSelectItems.push(getSelectItem(i));
        }

        return new sap.m.Select({
            autoAdjustWidth: true,
            items: aSelectItems
        });
    },
    getHeader = function () {
        return new sap.f.DynamicPageHeader({
            pinnable: true,
            content: [
                new sap.ui.layout.Grid({
                    content: getLabelWithSelectCombo(6),
                    defaultSpan: "XL2 L3 M4 S6"
                })
            ]
        })
    },
    getTitle = function (oToggleFooterButton) {
        return new sap.f.DynamicPageTitle({
            heading: [new sap.m.Title({ text: "Some title"})],
            snappedContent: [getLabel("Filtered 1042 items based on 'unknown' criteria")],
            actions: [
                new sap.m.ToolbarSpacer(),
                oToggleFooterButton,
                new sap.m.Button({
                    icon: "sap-icon://add"
                }),
                new sap.m.Button({
                    icon: "sap-icon://edit"
                }),
                new sap.m.Button({
                    icon: "sap-icon://delete"
                })
            ]
        })
    },
    getFooter = function () {
        return new sap.m.OverflowToolbar({
            content: [
                new sap.m.ToolbarSpacer(),
                new sap.m.Button({
                    text: "Accept",
                    type: "Accept"
                }),
                new sap.m.Button({
                    text: "Reject",
                    type: "Reject"
                })
            ]
        })
    },
    getDynamicPage = function (bPreserveHeader, oTitle, oHeader, oContent, oFooter) {
        return new sap.f.DynamicPage({
            preserveHeaderStateOnScroll: bPreserveHeader,
            title: oTitle,
            header: oHeader,
            content: oContent,
            footer: oFooter
        })
    };