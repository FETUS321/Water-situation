document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll("progress"); // เลือกทุก progress bar ในหน้า HTML
  progressBars.forEach((progressBar, index) => {
    // วนลูปผ่าน progress bar แต่ละอัน
    const targetValue = Number(progressBar.value); // เก็บค่าที่ตั้งไว้ใน progress bar (40, 50, ...)
    progressBar.value = 0; // เริ่มต้นค่า progress bar ที่ 0ms (0*200ms = 0ms)

    setTimeout(() => {
      const timer = setInterval(() => {
        // เริ่มต้นการเพิ่มค่า progress bar ทีละ 1
        if (progressBar.value < targetValue) {
          // ตรวจสอบว่าค่า progress bar ยังไม่ถึงค่าที่ตั้งไว้
          progressBar.value += 1; // เพิ่มค่า progress bar ทีละ 1
        } else {
          clearInterval(timer); // หยุดการเพิ่มค่า progress bar เมื่อถึงค่าที่ตั้งไว้
        }
      }, 10); // หน่วงเวลา 10ms ต่อการเพิ่มค่า progress bar ทีละ 1
    }, index * 200); // หน่วงเวลาให้แถบถัดไปเริ่มช้าลงทีละ 200ms
  });
});
