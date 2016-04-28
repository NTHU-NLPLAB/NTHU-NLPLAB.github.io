
$(function() {
    // Scrolls to the selected menu item on the page
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
            scrollTop: target.offset().top-50
            }, 1000);
            return false;
        }
        }
    });
});

$(function() {
    var ms_block = '';
    for( i in members['Master Students']) {
        member = members['Master Students'][i];
        name = escapeHtml(member.name)
        alias = escapeHtml(member.alias)
        img = escapeHtml(encodeURI(member.img))
        research_area = escapeHtml(member.research)
        bkg_color = escapeHtml(member.bkg_color)
        intro = escapeHtml(member.intro)
        
        ms_block +=  `<div class="col-md-3">
            <div class="thumbnail flipbox">
                <div class="member-info front">
                    <img class="img-responsive member-img" src="` + img + `" alt="` + name + `">
                    <h2>` + name + `<br ><small>` + alias + `</small></h2>
                    <div class="caption">
                        <p>` + research_area + `</p>
                    </div>
                </div>
                <div class="member-info back" style="background-color:` + bkg_color + `;">
                    <h1>` + name + `</h1>
                    <p>` + intro + `</p>
                </div>
            </div>
        </div>`;
    }
    $('div.ms-students > div:first-child').append(ms_block);
});