const ScrollRevealOption={
    distance:"50px",
    orgin:"bottom",
    duration: 1000,
};




ScrollReveal().reveal(".section-container h3",{
    ...ScrollRevealOption,
});

ScrollReveal().reveal(".section-container h1",{
    ...ScrollRevealOption,
    origin:"left",
    delay:500,
});

ScrollReveal().reveal(".section-container h2",{
    ...ScrollRevealOption,
    origin:"right",
    delay:1000,

});
ScrollReveal().reveal(".section-container button",{
    ...ScrollRevealOption,
    delay:1500,
});

ScrollReveal().reveal("a",{
    ...ScrollRevealOption,
    delay:2000,
    orgin:"top",
    interval:"300",
});

ScrollReveal().reveal(".SOCIALS a",{
    ...ScrollRevealOption,
    delay:4000,
    
    interval:"500",
});