
var btndemo2 = document.getElementById('demo2');
var demo2;
var options2 = {
  title : "Demo 2",
  content : 'You can close the modal by clicking the overlay...',
  closeBtn : false,
  buttons : []
};
btndemo2.addEventListener('click', function() {
  demo = new ZMODAL(options2);
});