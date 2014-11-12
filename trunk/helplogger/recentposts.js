function showlatestposts(json) {

  for (var i = 0; i < posts_no; i++) {
    var entry = json.feed.entry[i];
    var posttitle = entry.title.$t;
    var posturl;
    if (i == json.feed.entry.length) break;
    for (var k = 0; k < entry.link.length; k++) {
      if (entry.link[k].rel == 'alternate') {
        posturl = entry.link[k].href;
        break;
      }
    }
    posttitle = posttitle.link(posturl);
    var readmorelink = "...";
    readmorelink = readmorelink.link(posturl);
    var postdate = entry.published.$t;
    var showyear = postdate.substring(0,4);
    var showmonth = postdate.substring(5,7);
    var showday = postdate.substring(8,10);
    var monthnames = new Array();
    monthnames[1] = "Jan";
    monthnames[2] = "Feb";
    monthnames[3] = "Mar";
    monthnames[4] = "Apr";
    monthnames[5] = "May";
    monthnames[6] = "Jun";
    monthnames[7] = "Jul";
    monthnames[8] = "Aug";
    monthnames[9] = "Sep";
    monthnames[10] = "Oct";
    monthnames[11] = "Nov";
    monthnames[12] = "Dec";
    if ("content" in entry) {
      var postcontent = entry.content.$t;}
    else
    if ("summary" in entry) {
      var postcontent = entry.summary.$t;}
    else var postcontent = "";
    var re = /<\S[^>]*>/g; 
    postcontent = postcontent.replace(re, "");
 document.write('<div class="recent-post-title">');
    if (standardstyling) document.write('<br/>');
    document.write(posttitle);
    if (posts_date == true) document.write('<br/>' + monthnames[parseInt(showmonth,10)] + ' ' + showday + ' ' + showyear);
 document.write('</div><div class="recent-post-summ">');
    if (post_summary == true) {
      if (standardstyling) document.write('');
      if (postcontent.length < summary_chars) {
         if (standardstyling) document.write('<i>');
         document.write(postcontent);
         if (standardstyling) document.write('</i>');}
      else {
         if (standardstyling) document.write('');
         postcontent = postcontent.substring(0, summary_chars);
         var quoteEnd = postcontent.lastIndexOf(" ");
         postcontent = postcontent.substring(0,quoteEnd);
         document.write(postcontent + ' ' + readmorelink);
         if (standardstyling) document.write('');}
}
 document.write('</div>');
    if (standardstyling) document.write('');
}
if (!standardstyling) document.write('<div class="bbwidgetfooter">');
if (standardstyling) document.write('');
document.write('');
if (!standardstyling) document.write('');

}