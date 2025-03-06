function updateCountdown() {
    const birthday = new Date('2025-03-07'); // 设置你的生日日期
    const now = new Date();
    let diff = birthday - now;

    // 处理时间已过的情况
    if(diff < 0) {
        document.getElementById('countdown').innerHTML = 
            "🎉 生日快乐！愿此刻充满欢乐！";
        return;
    }

    // 计算各个时间单位
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * 1000 * 60 * 60 * 24;
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * 1000 * 60 * 60;
    
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * 1000 * 60;
    
    const seconds = Math.floor(diff / 1000);

    // 格式化为两位数显示
    const format = (num) => num.toString().padStart(2, '0');
    
    document.getElementById('countdown').innerHTML = `⌛ 剩余时间：<br>
        ${days} 天 ${format(hours)} 小时 
        ${format(minutes)} 分 ${format(seconds)} 秒
    `;
}
setInterval(updateCountdown, 1000);
updateCountdown(); // 立即执行一次避免初始空白