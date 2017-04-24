hexo.extend.tag.register('gist', function (args) {

  var id = args.shift();
  var file = args.length ? '?file=' + args[0] : '';

  return '<code data-gist-id="' + id + '" class="highlight plain"></code>';
});
