from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mail import Mail, Message

app = Flask(__name__)

# Конфигурация Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = 'in.drobyshev96@gmail.com'  # Замените на ваш email
app.config['MAIL_PASSWORD'] = 'qedg mpjj tfwb hzuc'  # Замените на ваш пароль
app.config['MAIL_DEFAULT_SENDER'] = 'in.drobyshev96@gmail.com'  # Замените на ваш email

mail = Mail(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/feedback', methods=['GET', 'POST'])
def feedback():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']

        msg = Message("Пробное занятие", recipients=['in.drobyshev96@gmail.com'])
        msg.body = f"Имя: {name}\nEmail: {email}\nСообщение: {message}"
        
        try:
            mail.send(msg)
            flash('Сообщение отправлено успешно!', 'success')
            return redirect(url_for('index'))
        except Exception as e:
            flash(f'Ошибка при отправке сообщения: {str(e)}', 'danger')
            return render_template('feedback.html')
    return render_template('feedback.html')

if __name__ == '__main__':
    app.secret_key = 'qedg mpjj tfwb hzuc'  # Добавьте секретный ключ для использования flash сообщений
    app.run(debug=True)
