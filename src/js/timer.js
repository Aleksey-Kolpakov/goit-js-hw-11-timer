
class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.daysRef = document.querySelector(`${selector} [data-value="days"]`);
        this.hoursRef = document.querySelector(`${selector} [data-value="hours"]`);
        this.minutesRef = document.querySelector(`${selector} [data-value="mins"]`);
        this.secondsRef = document.querySelector(`${selector} [data-value="secs"]`);
        this.targetDate = targetDate;

        this.timerId = setInterval(() => {
            if (this.targetDate.getTime() - Date.now() < 0) {
                clearInterval(this.timerId);
                alert('Полученная дата уже наступила, передайте дату в будующем');
                return;
            };
            const time = this.targetDate.getTime() - Date.now();
            this.daysRef.textContent = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
            this.hoursRef.textContent = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            this.minutesRef.textContent = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
            this.secondsRef.textContent = pad(Math.floor((time % (1000 * 60)) / 1000));
        }, 1000);
        function pad(value) {
            return String(value).padStart(2, '0');
        };
    };

};

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Sep 30, 2021'),
});
