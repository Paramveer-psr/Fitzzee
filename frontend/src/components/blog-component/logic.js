export function showMoreBlogs() {
  const blogContainer = document.getElementById('blogContainer');
  const seeMoreBtn = document.getElementById('seeMoreBtn');

  // Get currently hidden blogs
  const hiddenBlogs = blogContainer.querySelectorAll('.blog-box.hidden');

  // Reveal 3 at a time
  const blogsToShow = Array.from(hiddenBlogs).slice(0, 3);
  blogsToShow.forEach(blog => blog.classList.remove('hidden'));

  // Check again if any hidden blogs are left after showing
  const remainingHidden = blogContainer.querySelectorAll('.blog-box.hidden');
  if (remainingHidden.length === 0) {
    seeMoreBtn.style.display = 'none';
  }
}
