const fetchBtn = document.getElementById('fetchBtn');
const dogImage = document.getElementById('imgId');

fetchBtn.addEventListener('click', () => {
    fetch('https://raw.githubusercontent.com/hyeji-ko/study-11/main/image/kohyeji.jpg')
        .then(response => {
            if (!response.ok) throw new Error('이미지 로드 실패');
            return response.blob();
        })
        .then(blob => {
            dogImage.src = URL.createObjectURL(blob);
            dogImage.style.display = 'block';
        })
        .catch(error => console.error('에러 발생:', error));
});