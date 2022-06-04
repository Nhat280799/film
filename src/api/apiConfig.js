const apiConfig = {
    baseUrl : 'https://api.themoviedb.org/3/',
    apiKey : 'bfe694eba8700c313519c624bda036ec',
    originalImage : (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image : (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;