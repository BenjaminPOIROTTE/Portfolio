        function updateTime() {

            const now = new Date();
            document.getElementById('currentTime').textContent = now.toLocaleTimeString('fr-FR', {hour: '2-digit',minute: '2-digit',hour12: false});
            document.getElementById('currentDate').textContent = now.toLocaleDateString();

        }
        
        updateTime();
        setInterval(updateTime, 1000);
        