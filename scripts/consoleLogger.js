document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('formValid', function(event) {
        const formData = event.detail;
        
        console.clear();
        
        console.log('%c=== Данные формы обратной связи ===', 'color: #00d1b2; font-weight: bold; font-size: 14px;');
        
        console.log('ФИО:', formData.fullname);
        console.log('Телефон:', formData.phone);
        console.log('Email:', formData.email);
        console.log('Сообщение:', formData.message);
        
        const timestamp = new Date().toLocaleString('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        console.log('Время отправки:', timestamp);
        
        console.log('%c========================================', 'color: #00d1b2;');
    });
});
