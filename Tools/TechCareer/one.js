function one(){
    return`
    <h1>Know all about tech roles</h1>
    <p>#Skills   #Top Companies   #Salaries</p>
    <div id="searchbar">
        <input type="search" id="search" placeholder="Search any designation or role">
    </div>
    <div id="b1">
        <div id="inbox1">
        <p id="b1P">Trending Searches</p>
        </div>
        <div id="inbox2">
        <img src="data:image/png;base64,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Cmn7emp+OfE2ufB/wPffYPCmmyNaazqML/Nqc6/fhDD7sKn5f9th/dFfm5W54t0/U9I8UazZav5o1SG6livfN+95qv8AvM/8CrDoAKKKKACiivp39ir9ivxD+1n40ACy6T4K06RTqetFO3/PGL+9I3/jtAC/sUfsU6/+1p4yBxLpPgnTpFOq6wU/HyYv70jf+O1+8Xw3+G/h/wCEfg3SvCnhXTIdL0LT4fLihj4JIx8zcfMzcksec/ofDn4c+HPhD4J0vwr4W0yPStE0+NYYYIU5J4BdiB8zE8lj9a6igAooooAKKKKACiiigAooooAwPHngPQviZ4T1Hw14l06HVdF1CMxXFrMOGH9DX5EftBf8Ef8A4heFfENxe/C+a08YeHJJC0NlcXC299bA4+VvM+STn+IN2OVFfstRQB+Jfwa/4JD/ABf8Y6/anxwlr4J8PmQm5mku4rm8ZR/cijLLn/eYV+vvwZ+Dnhj4D/D/AE7wf4SsFsdJsxk/35pCBulc/wATtgZNdvRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAfmb/wUq/4J8yeNpNU+Lvw1tVn1psy67osWN10RwZ4P+mmfvp/FjI+br+RjxmNtrfer+qWvzJ/4KJf8E318VrffE/4S6bu1gbpNZ8P2n/L0Rw08I/56cHen8XJHzZyAfkbRV3ULGfTbya1uoZba4hPlyRTR+W6H/aWvp/8AYx/YS8W/tUeJre8ura60LwDayEXuuzRYE2MZht9w+d+nP3V/mAUf2J/2Kdf/AGtPGYLLLpXgnTpUOq6vj2z5MX952/8AHa/eH4a/Dfw78IvBul+E/Culx6XolhFsiijA6jGWc9WZupPt24FP+HHw48O/CXwZpnhXwtpsWlaLp8Yjht4h+bMf4mJ5JPWumoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA5LXvhH4F8VamNR1vwX4d1jUP+fu/0qCeX/vt0J/WumsrG2021jtrS3itbaMYSGFAiKPQAcCp6KACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Z" alt="jpg">
        </div>
        <div id="inbox">
            <p class="P_box">Java Developer</p>
            <p class="P_box">Business Analyst</p>
            <p class="P_box">Devops Engineer</p>
            <p class="P_box">Program Manager</p>
            <p class="P_box">Javascript Developer</p>
            <p class="P_box">Data Analyst</p>
            <p class="P_box">Technical Architect</p>
            <p class="P_box">Data Scientist</p>
            <p class="P_box">Full Stack Developer</p>
        </div>
    </div>`
}

export default one;