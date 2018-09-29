import md from '../../../README.md';

export const template = (context, html) => html`
<main-layout>
<main-header slot="page-header">
  <header>
    <h1 class="content-width">${context.__('@aofl/web-components/aofl-list-option')}</h1>
  </header>
</main-header>

<main slot="page-content" class="content-width column">
  <tab-headers id="content-tabs" groupId="contentTabs" storeInstance$="${context.storeInstance}">
    <aofl-list-option slot="tab" class="link" value="overview" selected$="${context.selectedContentTab === 'overview'}">Overview</aofl-list-option>
    <aofl-list-option slot="tab" class="link" value="examples" selected$="${context.selectedContentTab === 'examples'}">Examples</aofl-list-option>
  </tab-headers>

  <tab-content groupId="contentTabs" tabId="overview" storeInstance$="${context.storeInstance}">${html([md])}</tab-content>
  <tab-content groupId="contentTabs" tabId="examples" storeInstance$="${context.storeInstance}">
    <p>aofl-list-option is a simple component that updates a selected attribute when selected:</p>
    <aofl-preview dom-scope="aofl-list-option">
      <span slot="title">aofl-list-option</span>
      <code slot="javascript">${context.jsExample}</code>
      <code slot="css">${context.cssExample}</code>
      <code slot="htmlmixed">${context.htmlExample}</code>
    </aofl-preview>
  </tab-content>
</main>
</main-layout>
`;