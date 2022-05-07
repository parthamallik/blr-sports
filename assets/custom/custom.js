window.onload = function() {
    var url_string = window.location.href;
    var src = (new URL(url_string)).searchParams.get("ref");
    console.log("Redirected from ", src);
    gtag('event', 'redirect', {'redirected_from': src});
};