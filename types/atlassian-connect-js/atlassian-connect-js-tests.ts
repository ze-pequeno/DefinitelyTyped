AP.defineGlobal({}); // $ExpectType void
AP.defineModule("module", {}); // $ExpectType void
AP.getLocation(location => console.log(location)); // $ExpectType void
AP.resize("10px", "10px"); // $ExpectType void
AP.resize(); // $ExpectType void
AP.sizeToParent(true); // $ExpectType void
AP.hideFooter(true); // $ExpectType void
AP.addRequestMarshal(); // $ExpectType void
AP.request("http://example.com"); // $ExpectType Promise<{ body: string; xhr: XMLHttpRequest }>
AP.request("http://example.com", {}); // $ExpectType Promise<{ body: string; xhr: XMLHttpRequest }>
AP.request("http://example.com", { binaryAttachment: false }); // $ExpectType Promise<{ body: string; xhr: XMLHttpRequest }>
AP.request({ url: "http://example.com" }); // $ExpectType Promise<{ body: string; xhr: XMLHttpRequest }>
AP.request({ url: "http://example.com", binaryAttachment: false }); // $ExpectType Promise<{ body: string; xhr: XMLHttpRequest }>
AP.request("http://example.com", { success: (response: string) => {} }); // $ExpectType Promise<{ body: string; xhr: XMLHttpRequest }>
AP.request("http://example.com", { binaryAttachment: false, success: (response: string) => {} }); // $ExpectType Promise<{ body: string; xhr: XMLHttpRequest }>
AP.request({ url: "http://example.com", success: (response: string) => {} }); // $ExpectType Promise<{ body: string; xhr: XMLHttpRequest }>
AP.request({ url: "http://example.com", binaryAttachment: false, success: (response: string) => {} }); // $ExpectType Promise<{ body: string; xhr: XMLHttpRequest }>
AP.request("http://example.com", { binaryAttachment: true }); // $ExpectType Promise<{ body: ArrayBuffer; xhr: XMLHttpRequest }>
AP.request({ url: "http://example.com", binaryAttachment: true }); // $ExpectType Promise<{ body: ArrayBuffer; xhr: XMLHttpRequest }>
AP.request("http://example.com", { binaryAttachment: true, success: (response: ArrayBuffer) => {} }); // $ExpectType Promise<{ body: ArrayBuffer; xhr: XMLHttpRequest }>
AP.request({ url: "http://example.com", binaryAttachment: true, success: (response: ArrayBuffer) => {} }); // $ExpectType Promise<{ body: ArrayBuffer; xhr: XMLHttpRequest }>

AP.confluence.saveMacro({ foo: "bar" }, "a new macro body"); // $ExpectType void
AP.confluence.saveMacro({ foo: "bar" }); // $ExpectType void
AP.confluence.closeMacroEditor(); // $ExpectType void
AP.confluence.getMacroBody(body => console.log(body)); // $ExpectType void
AP.confluence.getMacroData(data => console.log(data)); // $ExpectType void
AP.confluence.getMacroData<{ foo: string; bar: number }>(({ foo, bar }) => console.log(foo, bar)); // $ExpectType void
AP.confluence.onMacroPropertyPanelEvent({ "{event-type}.{control-key}.{macro-key}.macro.property-panel": () => null }); // $ExpectType void
AP.confluence.closeMacroPropertyPanel(); // $ExpectType void
AP.confluence.getContentProperty("propertyKey", property => console.log(property)); // $ExpectType void
// $ExpectType void
AP.confluence.setContentProperty(
    { key: "propertyKey", value: "propertyValue", version: { number: 2 } },
    result => console.log(result),
);
AP.confluence.syncPropertyFromServer("propertyKey", property => console.log(property)); // $ExpectType void

AP.context.getToken(token => console.log(token)); // $ExpectType void
AP.context.getContext(context => console.log(context)); // $ExpectType void

AP.context.getToken(); // $ExpectType Promise<string>
AP.context.getContext(); // $ExpectType Promise<any>

AP.cookie.save("name", "value", 10); // $ExpectType void
AP.cookie.read("name", value => console.log(value)); // $ExpectType void
AP.cookie.erase("name"); // $ExpectType void

const editComponent = AP.customContent.getEditComponent(); // $ExpectType EditComponent
editComponent.intercept("confluence.customcontent.submit"); // $ExpectType void
editComponent.intercept("confluence.customcontent.submitSuccess"); // $ExpectType void
editComponent.intercept("confluence.customcontent.submitError"); // $ExpectType void
editComponent.intercept("confluence.customcontent.cancel"); // $ExpectType void
editComponent.submitCallback("content"); // $ExpectType void
editComponent.submitCallback({}); // $ExpectType void
editComponent.submitCallback(false); // $ExpectType void
editComponent.submitSuccessCallback(true); // $ExpectType void
editComponent.submitSuccessCallback(false); // $ExpectType void
editComponent.submitSuccessCallback(false, "error"); // $ExpectType void
editComponent.submitErrorCallback(true); // $ExpectType void
editComponent.submitErrorCallback(false); // $ExpectType void
editComponent.submitErrorCallback(false, "error"); // $ExpectType void
editComponent.cancelCallback(true); // $ExpectType void
editComponent.cancelCallback(false); // $ExpectType void
editComponent.cancelCallback(false, "error"); // $ExpectType void

AP.dialog.create({ key: "key", size: "small", customData: { data: 1 } }); // $ExpectType Dialog
// $ExpectType Dialog
AP.dialog.create({
    key: "my-module-key",
    width: "500px",
    height: "200px",
    chrome: true,
    buttons: [
        {
            text: "my button",
            identifier: "my_unique_identifier",
        },
    ],
});
AP.dialog.close(); // $ExpectType void
AP.dialog.close({ foo: "bar" }); // $ExpectType void
AP.dialog.getCustomData(data => console.log(data)); // $ExpectType void
AP.dialog.getButton("submit"); // $ExpectType {} | DialogButton
AP.dialog.disableCloseOnSubmit(); // $ExpectType void
AP.dialog.createButton(); // $ExpectType DialogButton
AP.dialog.isCloseOnEscape(enabled => console.log(enabled)); // $ExpectType void

const filter = (toCompare: any) => (toCompare === "data" ? true : false);

AP.events.on("name", data => console.log(data)); // $ExpectType void
AP.events.onPublic("n", () => null, filter); // $ExpectType void
AP.events.once("name", data => console.log(data)); // $ExpectType void
AP.events.oncePublic("name", data => console.log(data), filter); // $ExpectType void
AP.events.onAny((name, data) => console.log(name, data)); // $ExpectType void
AP.events.onAnyPublic((name, data) => console.log(name, data), filter); // $ExpectType void
AP.events.off("name", data => console.log(data)); // $ExpectType void
AP.events.offPublic("name", data => console.log(data)); // $ExpectType void
AP.events.offAll("name"); // $ExpectType void
AP.events.offAllPublic("name"); // $ExpectType void
AP.events.offAny((name, data) => console.log(name, data)); // $ExpectType void
AP.events.offAnyPublic((name, data) => console.log(name, data)); // $ExpectType void
AP.events.emit("name"); // $ExpectType void
AP.events.emit("name", ["data"]); // $ExpectType void
AP.events.emitPublic("name"); // $ExpectType void
AP.events.emitPublic("name", ["data"]); // $ExpectType void

const flag = AP.flag.create({ title: "title", body: "body", type: "info", actions: { test: "text" } }); // $ExpectType Flag
flag.close(); // $ExpectType void

AP.history.back(); // $ExpectType void
AP.history.forward(); // $ExpectType void
AP.history.go(-2); // $ExpectType void
AP.history.getState(); // $ExpectType string
AP.history.getState("all", (state) => console.log(state)); // $ExpectType void
AP.history.getState("hash", (state) => console.log(state)); // $ExpectType void
AP.history.getState(undefined, (state) => console.log(state)); // $ExpectType void
AP.history.getState("all", (state) => console.log(state)); // $ExpectType void
AP.history.pushState(1); // $ExpectType void
AP.history.pushState("page2"); // $ExpectType void
AP.history.pushState({ state: "state" }, "title", "https://example.com"); // $ExpectType void
AP.history.replaceState("https://example.com"); // $ExpectType void
AP.history.popState(e => console.log(e)); // $ExpectType void

AP.host.getSelectedText(selection => console.log(selection)); // $ExpectType void

AP.inlineDialog.hide(); // $ExpectType void

AP.jira.refreshIssuePage(); // $ExpectType void
AP.jira.getWorkflowConfiguration(workflowConfiguration => console.log(workflowConfiguration)); // $ExpectType void
AP.jira.isDashboardItemEditable(editable => console.log(editable)); // $ExpectType void
AP.jira.openCreateIssueDialog(issues => console.log(issues), { pid: 1, issueType: 1, fields: { field1: "field" } }); // $ExpectType void
AP.jira.openIssueDialog("key-1"); // $ExpectType void
AP.jira.openIssueDialog("key-1", (issueKey) => console.log(issueKey)); // $ExpectType void
AP.jira.setDashboardItemTitle("title"); // $ExpectType void
AP.jira.initJQLEditor(); // $ExpectType void
AP.jira.showJQLEditor(obj => console.log(obj.jql), {}); // $ExpectType void
AP.jira.isNativeApp(isNative => console.log(isNative)); // $ExpectType void

AP.navigator.getLocation(location => console.log(location)); // $ExpectType void
AP.navigator.getLocation(location => console.log(location.target)); // $ExpectType void
AP.navigator.getLocation(location => console.log(location.target === "contentcreate")); // $ExpectType void
AP.navigator.getLocation(location => console.log(location.context)); // $ExpectType void
AP.navigator.go("contentview", {}); // $ExpectType void
AP.navigator.go("issue", {}); // $ExpectType void
// $ExpectType void
AP.navigator.go("addonModule", {
    addonKey: "my-addon-key",
    moduleKey: "my-module-key",
    customData: { foo: "bar", answer: 42, valid: true, undef: undefined, nil: null },
});
// $ExpectType void
AP.navigator.go("addonModule", {
    addonKey: "my-addon-key",
    moduleKey: "my-module-key",
    customData: { arr: ["bar", 42, false, null, undefined] },
});
AP.navigator.reload(); // $ExpectType void

AP.scrollPosition.getPosition(position => console.log(position)); // $ExpectType void
AP.scrollPosition.setVerticalPosition(100, position => console.log(position)); // $ExpectType void

AP.theming.initializeTheming(); // $ExpectType void

AP.user.getUser(user => console.log(user.id, user.key, user.fullName)); // $ExpectType void
AP.user.getCurrentUser(user => console.log(user.atlassianAccountId)); // $ExpectType void
AP.user.getTimeZone(timezone => console.log(timezone)); // $ExpectType void
AP.user.getLocale(locale => console.log(locale)); // $ExpectType void
