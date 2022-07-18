<<<<<<< HEAD
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for (let i = 0; i < b ; i++){
        console.log('*'.repeat(a));
    }
=======
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for (let i = 0; i < b ; i++){
        console.log('*'.repeat(a));
    }
>>>>>>> a8ce554a23cbd8e9e588bcd3d820722c5b68194f
});