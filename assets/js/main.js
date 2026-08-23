// スクロールに合わせて要素をフェードインさせる
(function () {
  var targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  // IntersectionObserver 非対応、または動きを減らす設定のときは即表示
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!('IntersectionObserver' in window) || reduceMotion) {
    targets.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -10% 0px' });

  targets.forEach(function (el) { observer.observe(el); });
})();
