(function() {

  var db = {}
    , maxLength = 0

  function learnWord(from, to) {
    if (to.push && to.length) {
      for (var i = 0; i < to.length; i ++) {
        learnWord(from, to[i])
      }
      return
    }
    var array = db[from] || (db[from] = [])
    array[array.length] = to
    if (to.length > maxLength) maxLength = to.length
  }

  function learn(obj) {
    for (var i in obj) {
      learnWord(i, obj[i])
    }
  }

  function has(str) {
    return !!db[str]
  }

  function getKey(str) {
    for (var i in db) {
      for (var j in db[i]) {
        if(db[i][j] === str) {
          return i
        }
      }
    }
    return false
  }

  function get(str) {
    var c = db[str]
    return c[Math.floor(Math.random() * c.length)]
  }

  learn({
    'เ': '!',
    'ร': 's',
    'า': 'ๅ',
    'ข': 'v',
    'อ': 'o',
    'พ': 'w',
    'ด': '๑',
    'ะ': ':',
    'ง': 'J',
    'ห': 'x',
    'ย': 'e',
    'ท': 'n',
    'น': 'u',
    'แ': '!!',
    'ว': '๖',
    'ต': '๓',
    'บ': 'U',
    'ไ': 'l'
  })

  // learn({
  //   'ะ': '=',
  //   'อ': '๐',
  //   'เ': '!',
  //   'ย': 'E',
  //   'ธ': 'n',
  //   'แ': '!!'
  // })

  String.prototype.lne = function () {
    var lne = ''
    for (var i = 0; i < this.length; ) {
      var success = false
      for (var l = maxLength; l > 0; l --) {
        var sub = this.substr(i, l)
        if (has(sub)) {
          lne += get(sub)
          success = true
          i += l
          break
        }
      }
      if (success) continue
      lne += this.charAt(i)
      i += 1
    }
    return lne
  }

  String.prototype.thai = function() {
    var thai = ''
    for (var i = 0; i < this.length; ) {
      var success = false
      for (var l = maxLength; l > 0; l --) {
        var sub = this.substr(i, l)
          , th = getKey(sub)
        if (th !== false) {
          thai += th
          success = true
          i += l
          break
        }
      }
      if (success) continue
      thai += this.charAt(i)
      i += 1
    }
    return thai
  }

})()
