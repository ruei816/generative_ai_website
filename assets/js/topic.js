/* 研究主題頁：依 URL 的 topic 參數顯示對應論文。 */
(function () {
  "use strict";
  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  }
  document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const topicId = params.get("topic") || "";
    const topics = window.PAPERNOTE_TOPICS || [];
    const papers = window.PAPERNOTE_PAPERS || [];
    const topic = topics.find(item => item.id === topicId);
    const title = document.getElementById("topic-title");
    const english = document.getElementById("topic-english");
    const description = document.getElementById("topic-description");
    const icon = document.getElementById("topic-hero-icon");
    const keywords = document.getElementById("topic-keywords");
    const grid = document.getElementById("topic-paper-grid");
    const empty = document.getElementById("topic-empty");
    const count = document.getElementById("topic-paper-count");
    if (!topic) {
      title.textContent = "找不到這個研究主題";
      english.textContent = "TOPIC NOT FOUND";
      description.textContent = "請返回首頁，從主題卡片重新選擇。";
      icon.textContent = "?";
      keywords.innerHTML = "";
      count.textContent = "0 PAPERS";
      empty.hidden = true;
      return;
    }
    document.title = `${topic.title}｜PaperNote`;
    title.textContent = topic.title;
    english.textContent = topic.english;
    description.textContent = topic.description;
    icon.textContent = topic.icon || "✦";
    keywords.innerHTML = (topic.keywords || []).map(k => `<span class="keyword-tag">${escapeHTML(k)}</span>`).join("");
    const matched = papers.filter(paper => (paper.topics || []).includes(topic.id));
    count.textContent = `${matched.length} PAPERS`;
    grid.innerHTML = matched.map(paper => {
      const tags = (paper.keywords || []).map(k => `<span class="keyword-tag">${escapeHTML(k)}</span>`).join("");
      return `<article class="card paper-card"><div class="card-topline"><span class="paper-year">${escapeHTML(paper.year || "年份未提供")}</span><span class="card-index">PAPER NOTE</span></div><h3>${escapeHTML(paper.title)}</h3><p class="paper-author">${escapeHTML(paper.firstAuthor || "作者未提供")}</p><p class="paper-summary">${escapeHTML(paper.summary || "")}</p><div class="keyword-list">${tags}</div><div class="card-footer"><span class="updated-date">最後更新：${escapeHTML(paper.updatedAt || "尚無紀錄")}</span><a class="text-link" href="${escapeHTML(paper.page || "#")}">查看筆記 ↗</a></div></article>`;
    }).join("");
    empty.hidden = matched.length > 0;
    const back = document.getElementById("back-to-top");
    back.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    window.addEventListener("scroll", () => back.classList.toggle("is-visible", window.scrollY > 320), { passive: true });
  });
})();
