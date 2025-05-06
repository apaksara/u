document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const loginMessage = document.getElementById('loginMessage');
  const logoutBtn = document.getElementById('logoutBtn');

  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // mockup auth
      if (username === 'admin' && password === '1234') {
        window.location.href = 'dashboard.html';
      } else {
        loginMessage.textContent = 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง';
        loginMessage.style.color = 'red';
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  }
});


  document.addEventListener('DOMContentLoaded', function() {
    const roomTypes = JSON.parse(localStorage.getItem('roomTypes')) || [];
  
    const addRoomTypeForm = document.getElementById('addRoomTypeForm');
    const roomTypeTable = document.getElementById('roomTypeTable')?.querySelector('tbody');
    const backBtn = document.getElementById('backBtn');
  
    function renderTable() {
      if (!roomTypeTable) return;
      roomTypeTable.innerHTML = '';
      roomTypes.forEach((type, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${type.name}</td>
          <td>${type.price}</td>
          <td><button onclick="editRoomType(${index})">แก้ไข</button></td>
          <td><button onclick="deleteRoomType(${index})">ลบ</button></td>
        `;
        roomTypeTable.appendChild(row);
      });
    }
  
    window.editRoomType = function(index) {
      const newName = prompt('ชื่อใหม่:', roomTypes[index].name);
      const newPrice = prompt('ราคาใหม่:', roomTypes[index].price);
      if (newName && newPrice) {
        roomTypes[index].name = newName;
        roomTypes[index].price = newPrice;
        localStorage.setItem('roomTypes', JSON.stringify(roomTypes));
        renderTable();
      }
    }
  
    window.deleteRoomType = function(index) {
      if (confirm('ยืนยันการลบ?')) {
        roomTypes.splice(index, 1);
        localStorage.setItem('roomTypes', JSON.stringify(roomTypes));
        renderTable();
      }
    }
  
    if (addRoomTypeForm) {
      addRoomTypeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('roomTypeName').value;
        const price = document.getElementById('roomTypePrice').value;
        roomTypes.push({ name, price });
        localStorage.setItem('roomTypes', JSON.stringify(roomTypes));
        addRoomTypeForm.reset();
        renderTable();
      });
    }
  
    if (backBtn) {
      backBtn.addEventListener('click', function() {
        window.location.href = 'dashboard.html';
      });
    }
  
    renderTable();
  });
  document.addEventListener('DOMContentLoaded', function() {
    const rooms = JSON.parse(localStorage.getItem('rooms')) || [];
  
    const addRoomForm = document.getElementById('addRoomForm');
    const roomTable = document.getElementById('roomTable')?.querySelector('tbody');
    const backBtn = document.getElementById('backBtn');
  
    function renderRooms() {
      if (!roomTable) return;
      roomTable.innerHTML = '';
      rooms.forEach((room, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${room.number}</td>
          <td>${room.type}</td>
          <td>${room.status}</td>
          <td><button onclick="editRoom(${index})">แก้ไข</button></td>
          <td><button onclick="deleteRoom(${index})">ลบ</button></td>
        `;
        roomTable.appendChild(row);
      });
    }
  
    window.editRoom = function(index) {
      const newNumber = prompt('หมายเลขห้องใหม่:', rooms[index].number);
      const newType = prompt('ประเภทห้องใหม่:', rooms[index].type);
      const newStatus = prompt('สถานะใหม่ (ว่าง/ไม่ว่าง):', rooms[index].status);
      if (newNumber && newType && newStatus) {
        rooms[index].number = newNumber;
        rooms[index].type = newType;
        rooms[index].status = newStatus;
        localStorage.setItem('rooms', JSON.stringify(rooms));
        renderRooms();
      }
    }
  
    window.deleteRoom = function(index) {
      if (confirm('ยืนยันการลบห้องนี้?')) {
        rooms.splice(index, 1);
        localStorage.setItem('rooms', JSON.stringify(rooms));
        renderRooms();
      }
    }
  
    if (addRoomForm) {
      addRoomForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const number = document.getElementById('roomNumber').value;
        const type = document.getElementById('roomType').value;
        const status = document.getElementById('roomStatus').value;
        rooms.push({ number, type, status });
        localStorage.setItem('rooms', JSON.stringify(rooms));
        addRoomForm.reset();
        renderRooms();
      });
    }
  
    if (backBtn) {
      backBtn.addEventListener('click', function() {
        window.location.href = 'dashboard.html';
      });
    }
  
    renderRooms();
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const rates = JSON.parse(localStorage.getItem('rates')) || {
      water: 0,
      electric: 0,
      service: 0,
      parking: 0
    };
  
    const rateForm = document.getElementById('rateForm');
    const currentRates = document.getElementById('currentRates');
  
    function renderRates() {
      if (!currentRates) return;
      currentRates.innerHTML = `
        <li>ค่าน้ำ: ${rates.water} บาท/หน่วย</li>
        <li>ค่าไฟ: ${rates.electric} บาท/หน่วย</li>
        <li>ค่าส่วนกลาง: ${rates.service} บาท/เดือน</li>
        <li>ค่าจอดรถ: ${rates.parking} บาท/เดือน</li>
      `;
    }
  
    if (rateForm) {
      rateForm.addEventListener('submit', function(e) {
        e.preventDefault();
        rates.water = document.getElementById('waterRate').value || 0;
        rates.electric = document.getElementById('electricRate').value || 0;
        rates.service = document.getElementById('serviceRate').value || 0;
        rates.parking = document.getElementById('parkingRate').value || 0;
        localStorage.setItem('rates', JSON.stringify(rates));
        renderRates();
        rateForm.reset();
      });
    }
  
    renderRates();
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const tenants = JSON.parse(localStorage.getItem('tenants')) || [];
    const tenantForm = document.getElementById('tenantForm');
    const tenantTable = document.getElementById('tenantTable')?.querySelector('tbody');
    
    function renderTenants() {
      if (!tenantTable) return;
      tenantTable.innerHTML = '';
      tenants.forEach((tenant, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${tenant.name}</td>
          <td>${tenant.room}</td>
          <td>${tenant.startDate}</td>
          <td>${tenant.status}</td>
          <td><button onclick="moveOutTenant(${index})">แจ้งย้าย</button></td>
          <td><button onclick="editTenant(${index})">แก้ไข</button></td>
          <td><button onclick="deleteTenant(${index})">ลบ</button></td>
        `;
        tenantTable.appendChild(row);
      });
    }
  
    window.moveOutTenant = function(index) {
      tenants[index].status = 'ย้ายออก';
      localStorage.setItem('tenants', JSON.stringify(tenants));
      renderTenants();
    };
  
    window.editTenant = function(index) {
      const newName = prompt('ชื่อผู้เช่าใหม่:', tenants[index].name);
      if (newName) {
        tenants[index].name = newName;
        localStorage.setItem('tenants', JSON.stringify(tenants));
        renderTenants();
      }
    };
  
    window.deleteTenant = function(index) {
      if (confirm('ยืนยันการลบ?')) {
        tenants.splice(index, 1);
        localStorage.setItem('tenants', JSON.stringify(tenants));
        renderTenants();
      }
    };
  
    if (tenantForm) {
      tenantForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('tenantName').value;
        const room = document.getElementById('tenantRoom').value;
        const startDate = document.getElementById('startDate').value;
        tenants.push({ name, room, startDate, status: 'ปกติ' });
        localStorage.setItem('tenants', JSON.stringify(tenants));
        tenantForm.reset();
        renderTenants();
      });
    }
  
    renderTenants();
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    const billings = JSON.parse(localStorage.getItem('billings')) || [];
    const rates = JSON.parse(localStorage.getItem('rates')) || { water: 18, electric: 8, service: 0, parking: 0 };

    
    const billingForm = document.getElementById('billForm');
    const billingTable = document.getElementById('billTable')?.querySelector('tbody');
    const backBtn = document.getElementById('backBtn'); 

    renderBillings();

    function renderBillings() {
      if (!billingTable) return;
      billingTable.innerHTML = '';
      billings.forEach((bill, index) => {
          const waterCost = bill.waterUsage * rates.water;
          const electricCost = bill.electricUsage * rates.electric;
          const total = waterCost + electricCost;
  
          console.log("Bill:", bill);
          console.log("Rates:", rates);
          console.log("Water Cost:", waterCost);
          console.log("Electric Cost:", electricCost);
          console.log("Service Rate:", rates.service);
          console.log("Parking Rate:", rates.parking);
          console.log("Total:", total);
  
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${bill.room}</td>
              <td>${waterCost} บาท</td>
              <td>${electricCost} บาท</td>
              <td>${rates.service} บาท</td>
              <td>${rates.parking} บาท</td>
              <td>${total} บาท</td>
              <td><button onclick="printBill(${index})">พิมพ์</button></td>
              <td><button onclick="deleteBill(${index})">ลบ</button></td>
          `;
          billingTable.appendChild(row);
      });
  }

    window.printBill = function(index) {
        const bill = billings[index];
        const waterCost = bill.waterUsage * rates.water;
        const electricCost = bill.electricUsage * rates.electric;
        const total = waterCost + electricCost;
        const billText = `
            ห้อง: ${bill.room}
            ค่าน้ำ: ${waterCost} บาท
            ค่าไฟ: ${electricCost} บาท
            ค่าส่วนกลาง: ${rates.service} บาท
            ค่าจอดรถ: ${rates.parking} บาท
            รวม: ${total} บาท
        `;
        alert(billText);
    }

    window.deleteBill = function(index) {
        if (confirm('ยืนยันการลบ?')) {
            billings.splice(index, 1);
            localStorage.setItem('billings', JSON.stringify(billings));
            renderBillings();
        }
    }

    if (billingForm) {
        billingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const room = document.getElementById('billRoom').value;
            
            const waterUsage = parseFloat(document.getElementById('waterUnits').value);
            const electricUsage = parseFloat(document.getElementById('electricUnits').value);

            if (room && !isNaN(waterUsage) && !isNaN(electricUsage)) {
                billings.push({ room, waterUsage, electricUsage });
                localStorage.setItem('billings', JSON.stringify(billings));
                billingForm.reset();
                renderBillings();
            } else {
                alert('กรุณากรอกข้อมูลห้อง, หน่วยน้ำ และหน่วยไฟให้ถูกต้อง');
            }
        });
    }

    if (backBtn) {
        backBtn.addEventListener('click', function() {
            window.location.href = 'dashboard.html';
        });
    }

    renderBillings();
});
  
  document.addEventListener('DOMContentLoaded', function() {
    const payments = JSON.parse(localStorage.getItem('payments')) || [];
    const paymentForm = document.getElementById('paymentForm');
    const paymentTable = document.getElementById('paymentTable')?.querySelector('tbody');
  
    function renderPayments() {
      if (!paymentTable) return;
      paymentTable.innerHTML = '';
      payments.forEach((payment, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${payment.room}</td>
          <td>${payment.amount} บาท</td>
          <td>${payment.date}</td>
          <td><button onclick="deletePayment(${index})">ลบ</button></td>
        `;
        paymentTable.appendChild(row);
      });
    }
  
    window.deletePayment = function(index) {
      if (confirm('ยืนยันการลบ?')) {
        payments.splice(index, 1);
        localStorage.setItem('payments', JSON.stringify(payments));
        renderPayments();
      }
    };
  
    if (paymentForm) {
      paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const room = document.getElementById('paymentRoom').value;
        const amount = parseFloat(document.getElementById('paymentAmount').value);
        const date = document.getElementById('paymentDate').value;
        payments.push({ room, amount, date });
        localStorage.setItem('payments', JSON.stringify(payments));
        paymentForm.reset();
        renderPayments();
      });
    }
  
    renderPayments();
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const checkouts = JSON.parse(localStorage.getItem('checkouts')) || [];
    const checkoutForm = document.getElementById('checkoutForm');
    const checkoutTable = document.getElementById('checkoutTable')?.querySelector('tbody');
  
    function renderCheckouts() {
      if (!checkoutTable) return;
      checkoutTable.innerHTML = '';
      checkouts.forEach((checkout, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${checkout.room}</td>
          <td>${checkout.damageFee} บาท</td>
          <td>${checkout.date}</td>
          <td><button onclick="deleteCheckout(${index})">ลบ</button></td>
        `;
        checkoutTable.appendChild(row);
      });
    }
  
    window.deleteCheckout = function(index) {
      if (confirm('ยืนยันการลบ?')) {
        checkouts.splice(index, 1);
        localStorage.setItem('checkouts', JSON.stringify(checkouts));
        renderCheckouts();
      }
    };
  
    if (checkoutForm) {
      checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const room = document.getElementById('checkoutRoom').value;
        const damageFee = parseFloat(document.getElementById('damageFee').value);
        const date = document.getElementById('checkoutDate').value;
        checkouts.push({ room, damageFee, date });
        localStorage.setItem('checkouts', JSON.stringify(checkouts));
        checkoutForm.reset();
        renderCheckouts();
      });
    }
  
    renderCheckouts();
  });
  