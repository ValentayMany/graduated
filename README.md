# Graduation & Birthday Surprise

หน้าเว็บเซอร์ไพรส์สำหรับวันรับปริญญาและวันเกิด สร้างด้วย HTML, CSS และ JavaScript แบบไม่ต้องติดตั้งแพ็กเกจ

## ความสามารถ

- เปิดกล่องของขวัญพร้อมนับถอยหลังและเอฟเฟกต์กระดาษสี
- แสดงรูปภาพ จดหมาย และคำอวยพร
- เปิดอ่านข้อความพิเศษจากปุ่มลอยมุมขวาล่าง
- รองรับหน้าจอมือถือและข้อความภาษาลาว

## เปิดดูในเครื่อง

เปิด `index.html` ในเว็บเบราว์เซอร์ได้โดยตรง หรือใช้ส่วนขยาย Live Server ใน VS Code เพื่อเปิดหน้าเว็บระหว่างแก้ไข

## เผยแพร่ด้วย GitHub Pages

1. Push โปรเจกต์ขึ้น GitHub branch `main`
2. เปิดหน้า repository แล้วไปที่ **Settings > Pages**
3. ใน **Build and deployment** เลือก **Deploy from a branch**
4. เลือก branch `main` และโฟลเดอร์ `/ (root)` แล้วกด **Save**
5. รอให้ GitHub Pages เผยแพร่เว็บไซต์ แล้วเปิด URL ที่แสดงในหน้า Pages

## ปรับแต่ง

- แก้ข้อความและคำอวยพรใน `assets/js/app.js` ภายใน `occasions` และ `specialMessages`
- แก้สีและรูปแบบหน้าเว็บใน `assets/css/styles.css`
- แก้โครงหน้าและรูปภาพใน `index.html`

## โครงสร้างโปรเจกต์

```text
.
|-- assets/
 |   |-- css/
 |   |   `-- styles.css
 |   |-- images/
 |   |   |-- photo-01.jpg
 |   |   |-- photo-02.jpg
 |   |   `-- photo-03.jpg
 |   `-- js/
 - แก้โครงหน้าใน `index.html` และเปลี่ยนรูปใน `assets/images`
|       `-- app.js
|-- index.html
|-- README.md
`-- .gitignore
```