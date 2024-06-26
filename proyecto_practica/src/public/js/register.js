const form = document.getElementById('registerForm');
form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key) => obj[key] = value);
    // console.log('Data object:', obj);
    const response = await fetch('/api/sessions/register', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": 'application/json'
        }
    })
    const result = await response.json();
    console.log('Response from server: ', result)
    // if (response.status === 200) {
    //     window.location.replace('login')
    // }
})