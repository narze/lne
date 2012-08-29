$(function () {
  $('.to-lne').click(toLne)
  $('.to-thai').click(toThai)

  function toLne(e) {
    e.preventDefault()
    var lne = $('.thai').val().lne()
    $('.lne').val(lne)
  }

  function toThai(e) {
    e.preventDefault()
    var thai = $('.lne').val().thai()
    $('.thai').val(thai)
  }
})