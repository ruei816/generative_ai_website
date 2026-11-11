/* PaperNote 首頁：顯示實際收錄論文卡片與即時搜尋。 */
(function () {
  "use strict";
  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  }
  function createPaperCard(paper) {
    const keywords = (paper.keywords || []).map(k => `<span class="keyword-tag">${escapeHTML(k)}</span>`).join("");
    const author = paper.firstAuthor || (paper.authors || [])[0] || "作者未提供";
    const page = escapeHTML(paper.page || "#");
    const title = escapeHTML(paper.title || "未命名論文");
    return `
      <a class="card paper-card" href="${page}" aria-label="開啟論文：${title}">
        <div class="card-topline"><span class="paper-year">${escapeHTML(paper.year || "年份未提供")}</span><span class="card-index">PAPER NOTE</span></div>
        <h3>${title}</h3>
        <p class="paper-author">${escapeHTML(author)}</p>
        <p class="paper-summary">${escapeHTML(paper.summary || "")}</p>
        <div class="keyword-list">${keywords}</div>
        <div class="card-footer"><span class="updated-date">最後更新：${escapeHTML(paper.updatedAt || "未提供")}</span></div>
      </a>`;
  }
  document.addEventListener("DOMContentLoaded", function () {
    const papers = Array.isArray(window.PAPERNOTE_PAPERS) ? window.PAPERNOTE_PAPERS : [];
    const grid = document.getElementById("paper-grid");
    const searchInput = document.getElementById("paper-search");
    const emptyState = document.getElementById("empty-state");
    const noResults = document.getElementById("no-results");
    const backToTop = document.getElementById("back-to-top");
    const paperCount = document.getElementById("paper-count");
    function renderPapers(query) {
      const q = query.trim().toLocaleLowerCase();
      const filtered = papers.filter(p => [p.title, p.firstAuthor, ...(p.authors || []), ...(p.keywords || []), p.venue, p.doi].join(" ").toLocaleLowerCase().includes(q));
      grid.innerHTML = filtered.map(createPaperCard).join("");
      paperCount.textContent = `${filtered.length} FILES FOUND`;
      emptyState.hidden = papers.length > 0;
      grid.hidden = filtered.length === 0;
      noResults.hidden = papers.length === 0 || filtered.length > 0;
    }
    if (searchInput) searchInput.addEventListener("input", e => renderPapers(e.target.value));
    if (backToTop) {
      backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
      window.addEventListener("scroll", () => backToTop.classList.toggle("is-visible", window.scrollY > 320), { passive: true });
    }
    renderPapers("");
  });
})();
