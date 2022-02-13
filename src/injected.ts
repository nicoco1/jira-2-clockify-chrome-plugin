/**
 * This is an injectable script
 * It is added to the "web_accessible_resources"
 * field in manifest.json and can be injected by
 * the content script.
 *
 * It is useful for modifying the DOM of different
 * tabs easily
 */

console.log('Injected script');

const summaryValEl = document.getElementById('summary-val');
summaryValEl?.insertAdjacentHTML(
    'afterend',
    '<a class="small clockify-button-inactive" title="TODO KFHIT" id="clockifySmallButton" style="padding-bottom: 0px;"></a>'
);

const clockifyButtonEl = document.getElementById('clockifySmallButton');
const imgEl = document.createElement('img');
imgEl.setAttribute(
    'src',
    'chrome-extension://adaiaabpfldodemjengddoeoffdkejgh/images/clockify-small.svg'
);
clockifyButtonEl?.appendChild(imgEl);

const typeValEl = document.getElementById('type-val');
const issueLinkEl = document.getElementById('key-val');
const fullIssueText = `${typeValEl?.textContent} [${issueLinkEl?.textContent}] - ${summaryValEl?.textContent}`;

clockifyButtonEl?.addEventListener('click', () => {
    navigator.clipboard
        .writeText(fullIssueText)
        .then(() => alert('copied to clipboad'));
});

export {};
