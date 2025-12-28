    <script>
        function showPage(pageId) {
            document.querySelectorAll('.section').forEach(sec => {
                sec.classList.remove('active');
            });
            document.getElementById(pageId).classList.add('active');

            document.querySelectorAll('nav button').forEach(btn => {
                btn.classList.remove('active');
            });
            document.getElementById('btn-' + pageId).classList.add('active');

            window.scrollTo(0, 0);
        }
    </script>
