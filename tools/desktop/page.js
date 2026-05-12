var data = [
    {
        title: "RaidCrawler",
        user: "legofigure11",
        repo: "raidcrawler",
        branch: "main",
        workflowfile: "dotnet-desktop.yml",
        guide: "https://billo-guides.github.io/cfw/sv/raidcrawler",
        desc: "sys-botbase client Raid Viewer for Pokémon Scarlet & Violet for the Nintendo Switch.",
        image: "/RaidCrawler/README.png"
    },
    {
        title: "owoow",
        user: "legofigure11",
        repo: "owoow",
        workflowfile: "dotnet-desktop.yml",
        branch: "master",
        guide: "https://billo-guides.github.io/",
        desc: "RNG Tool and sys-botbase client for Pokémon Sword & Shield for the Nintendo Switch.",
        image: "/owoow/README.png",
    },
    {
        title: "AutomaticRadarSeedExtrapolator",
        user: "legofigure11",
        repo: "automaticradarseedextrapolator",
        workflowfile: "dotnet-desktop.yml",
        branch: "main",
        guide: "https://billo-guides.github.io/",
        desc: "RNG Tool and sys-botbase client for the Poké Radar in Pokémon Brilliant Diamond & Shining Pearl for the Nintendo Switch.",
        image: "/ARSE/README.png",
    },
    {
        title: "ParLiAment",
        user: "legofigure11",
        repo: "parliament",
        workflowfile: "dotnet-desktop.yml",
        branch: "main",
        guide: "https://billo-guides.github.io/",
        desc: "RNG Tool and sys-botbase client for Static and Over-World Legendaries (OWLs) in Pokémon Legends: Arceus for the Nintendo Switch",
        image: "/ParLiAment/README.png"
    },
    {
        title: "GRASS",
        user: "legofigure11",
        repo: "grass",
        workflowfile: "dotnet-desktop.yml",
        branch: "main",
        desc: "Stands for GBA RNG Abuse for Switch Systems. RNG Tool and sys-botbase client for Pokémon FireRed & LeafGreen for the Nintendo Switch.",
        guide: "https://billo-guides.github.io/",
        image: "/GRASS/readme.png"
    },
    {
        title: "Outbreaker",
        user: "legofigure11",
        repo: "outbreaker",
        branch: "main",
        desc: "Quick-n-dirty sys-botbase-powered Outbreak Resetter for Pokémon Scarlet & Violet for the Nintendo Switch.",
        image: "/Outbreaker/README.png",
        workflowfile: "dotnet-desktop.yml"
    },
    {
        title: "ZATradePartnerViewer",
        user: "legofigure11",
        repo: "zatradepartnerviewer",
        branch: "main",
        desc: "sys-botbase Trade Partner info viewer for PS! Wi-Fi's Official Giveaways.",
        image: "/ZATradePartnerViewer/README.png",
        workflowfile: "dotnet-desktop.yml"
    }
];

function generateListItem(item) {
    var container = document.createElement("div");
    container.classList.add("pb-3");
    
    // title
    var h2 = document.createElement("a");
    h2.href = "https://github.com/" + item.user + "/" + item.repo;
    h2.classList.add("anchored", "h2", "text-light", "text-decoration-none");
    h2.textContent = item.title;
    container.appendChild(h2);

    // subtitle / badge container
    var h5 = document.createElement("h5");
    h5.classList.add("text-secondary");
    container.appendChild(h5);

    // badges

    // build status
    if (item.workflowfile) {
        var buildc = document.createElement("a");
        buildc.href = "https://github.com/" + item.user + "/" + item.repo + "/actions/workflows/" + item.workflowfile;
        h5.appendChild(buildc);
        addSeperator(h5);
    
        var buildimg = document.createElement("img");
        buildimg.src = "https://img.shields.io/github/actions/workflow/status/" + item.user + "/" + item.repo + "/" + item.workflowfile + "?branch=" + item.branch;
        buildimg.alt = "Build Status: .NET Core Desktop Badge";
        buildc.appendChild(buildimg);
    }

    // license
    var licensec = document.createElement("a");
    licensec.href = "https://github.com/" + item.user + "/" + item.repo + "/blob/" + item.branch + "/LICENSE.txt";
    h5.appendChild(licensec);
    addSeperator(h5);

    var licenseimg = document.createElement("img");
    licenseimg.src = "https://img.shields.io/github/license/" + item.user + "/" + item.repo + "?color=ff69b4";
    licenseimg.alt = "License Badge";
    licensec.appendChild(licenseimg);

    addSeperator(h5, false);

    // version
    var versionc = document.createElement("a");
    versionc.href = "https://github.com/" + item.user + "/" + item.repo + "/releases/latest";
    h5.appendChild(versionc);
    addSeperator(h5);

    var versionimg = document.createElement("img");
    versionimg.src = "https://img.shields.io/github/v/release/" + item.user + "/" + item.repo + "?label=latest%20release";
    versionimg.alt = "Latest Version Badge";
    versionc.appendChild(versionimg);

    // downloads
    var dlc = document.createElement("a");
    dlc.href = "https://github.com/" + item.user + "/" + item.repo + "/releases/latest";
    h5.appendChild(dlc);
    addSeperator(h5);

    var dlimg = document.createElement("img");
    dlimg.src = "https://img.shields.io/github/downloads/" + item.user + "/" + item.repo + "/total?label=total%20downloads";
    dlimg.alt = "Download Count Badge";
    dlc.appendChild(dlimg);

    addSeperator(h5, false);

    // project language
    var langc = document.createElement("a");
    langc.href = "https://github.com/" + item.user + "/" + item.repo
    h5.appendChild(langc);
    addSeperator(h5);

    var langimg = document.createElement("img");
    langimg.src = "https://img.shields.io/github/languages/top/" + item.user + "/" + item.repo;
    langimg.alt = "Project Language Badge";
    langc.appendChild(langimg);
    
    // stars
    var starsc = document.createElement("a");
    starsc.href = "https://github.com/" + item.user + "/" + item.repo + "/stargazers";
    h5.appendChild(starsc);

    var starsimg = document.createElement("img");
    starsimg.src = "https://img.shields.io/github/stars/" + item.user + "/" + item.repo + "?style=flat&color=goldenrod";
    starsimg.alt = "GitHub Stars Badge";
    starsc.appendChild(starsimg);

    // desc

    var desc = document.createElement("p");
    desc.classList.add("mb-0");
    desc.textContent = item.desc;
    container.appendChild(desc);

    // guide
    if (item.guide) {
        var guide = document.createElement("p");
        guide.classList.add("mb-0");
        guide.textContent = "A usage guide is available ";
        var glink = document.createElement("a");
        glink.classList.add("text-info");
        glink.textContent = "here";
        glink.href = item.guide;
        guide.appendChild(glink);

        var gspan = document.createElement("span");
        gspan.textContent = ".";
        guide.appendChild(gspan);

        desc.appendChild(guide);
    }

    // image
    if (item.image) {
        var img = document.createElement("img");
        img.classList.add("img-fluid", "pt-1", "clickable-image", "mx-auto", "d-block");
        img.src = "./res" + item.image;
        img.alt = item.title + " tool screenshot";
        img.dataset.image = "./res" + item.image;
        container.appendChild(img);
    }


    return container;
}

function addSeperator(parent, space = true) {
    var sep = document.createElement("span");
    sep.textContent = space ? " " : " | ";

    parent.appendChild(sep);

    if (!space) {
        sep.classList.add("d-none", "d-md-inline");

        var br = document.createElement("br");
        br.classList.add("d-inline", "d-md-none");
        parent.appendChild(br);
    }
}