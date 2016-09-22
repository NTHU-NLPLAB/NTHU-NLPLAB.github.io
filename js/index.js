
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
        name = escapeHtml(member.name);
        alias = escapeHtml(member.alias);
        img = escapeHtml(encodeURI(member.img));
        research_area = escapeHtml(member.research);
        bkg_color = escapeHtml(member.bkg_color);
        intro = escapeHtml(member.intro);
        link = (member.link) ? 'href="' + encodeURI(member.link) + '" target="_blank"': '';
        
        ms_block +=  
        `<a class="col-md-3" ` + link + `>
           <div class="thumbnail flipbox">
             <div class="member-info front">
               <img class="img-responsive" src="` + img + `" alt="` + name + `">
               <h3>` + name + `<br ><small>` + alias + `</small></h3>
               <div class="caption">
                 <p>` + research_area + `</p>
               </div>
             </div>
             <div class="member-info back" style="background-color:` + bkg_color + `;">
               <h2>` + name + `</h2>
               <p>` + intro + `</p>
             </div>
           </div>
         </a>`;
    }
    $('div.ms-students > div:first-child').append(ms_block);
});

$(function() {
    var und_block = '';
    for( i in members['Undergraduates']) {
        member = members['Undergraduates'][i];
        und_block +=  `<div class="col-md-3">
        <div class="thumbnail flipbox">
            <div class="member-info front">
                <h3>` + member.name + `<br><small>` + member.alias + `</small></h3>
                        <div class="caption">
                          <p>` + member.research + `</p>
                        </div>
                 </div></div>       
                       </div>`;
    }
    $('div.undergrad > div:first-child').append(und_block);
});

$(function() {
    var re_block = '';
    for( i in research['Research']) {
        re = research['Research'][i];
        
        re_block +=  `<div class="col-md-4">
            <div class="research-item">
                <span class="fa-stack fa-5x">
                  <i class="fa ` + re.fa + ` text-primary"></i>
                </span>
                <h4><strong>` + re.name_chi + `</strong></h4>
                <h4><strong>` + re.name_eng + `</strong></h4>
                </div>
            </div>`;
        console.log(re_block)
    }
    $('div.research').append(re_block);
});


