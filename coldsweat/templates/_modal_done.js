{{default location = ''}}
{{if location}}
    $('.modal').on('hidden', function () {window.location.assign('{{location}}')}).modal('hide')
{{else}}
    $('.modal').modal('hide')
{{endif}}