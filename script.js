// Kullanıcı bilgilerini sakla (örnek veriler)
const users = [
    {
        username: "admin",
        email: "admin@example.com",
        password: "admin",
        birthdate: "2000-01-01",
        gender: "diğer"
    }
];

// Giriş işlemi
function login() {
    const identifier = document.getElementById("login-identifier").value;
    const password = document.getElementById("password").value;
    
    const user = users.find(user => (user.username === identifier || user.email === identifier) && user.password === password);

    if (user) {
        alert("Giriş Başarılı!");
        document.getElementById("login-container").style.display = "none";
        document.getElementById("home-container").style.display = "flex";
        
        // Profil bilgilerini göster
        document.getElementById("profile-username").innerText = `Kullanıcı Adı: ${user.username}`;
        document.getElementById("profile-email").innerText = `E-posta: ${user.email}`;
        document.getElementById("profile-birthdate").innerText = `Doğum Tarihi: ${user.birthdate}`;
        document.getElementById("profile-gender").innerText = `Cinsiyet: ${user.gender}`;
    } else {
        alert("Kullanıcı adı veya şifre yanlış.");
    }
}

// Kayıt işlemi
function register() {
    const email = document.getElementById("email").value;
    const username = document.getElementById("reg-username").value;
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;
    const password = document.getElementById("reg-password").value;

    // Yaş kontrolü
    const birthYear = new Date(birthdate).getFullYear();
    const currentYear = new Date().getFullYear();

    if (currentYear - birthYear < 2009) {
        alert("2009 ve üstü doğum tarihiyle kayıt olamazsınız.");
        return;
    }

    if (!username || username.includes(" ") || /[^a-zA-Z0-9]/.test(username)) {
        alert("Kullanıcı adı geçersiz. Boşluk veya özel karakter olmamalıdır.");
        return;
    }

    // Kullanıcıyı kaydet
    const newUser = {
        username: username,
        email: email,
        password: password,
        birthdate: birthdate,
        gender: gender
    };
    users.push(newUser);
    alert("Başarıyla kayıt olundu!");
    showLogin();
}

// Kayıt ekranını göster
function showRegister() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("register-container").style.display = "flex";
}

// Giriş ekranını göster
function showLogin() {
    document.getElementById("register-container").style.display = "none";
    document.getElementById("login-container").style.display = "flex";
}

// Ana sayfayı göster
function showHome() {
    document.getElementById("profile-container").style.display = "none";
    document.getElementById("home-container").style.display = "flex";
}

// Sohbet isteği gönder
function sendRequest(username) {
    alert(`${username} için sohbet isteği gönderildi.`);
}

// Profil sayfasını göster
function showProfile() {
    document.getElementById("home-container").style.display = "none";
    document.getElementById("profile-container").style.display = "flex";
}
