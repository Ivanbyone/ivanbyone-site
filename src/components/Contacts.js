import './Contacts.css';

function Contacts() {
    return (
        <div id="contacts">
            <h2>Контакты</h2>
            <div>
                <p>Telegram: <a className="contact" href="https://t.me/ivanbyone">@ivanbyone</a></p>
                <p>Email: <a className="contact" href="mailto:ivanbyone@gmail.com">ivanbyone@gmail.com</a></p>
                <p><a className="contact" href="https://github.com/Ivanbyone">Github</a></p>
            </div>
        </div>
    )
}

export default Contacts;