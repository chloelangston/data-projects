export interface TimelineEvent {
    date: {
        year: number;
        month: number | null;
        day: number | null;
    };
    event_title: string;
    event_description: string;
    category: string;
    source: { podcast: string; timestamp: string; deep_link: string };
    external_assets?: { type: string; url: string; label: string }[];
}

export const timelineData: TimelineEvent[] = [
    {
        "date": { "year": 1953, "month": 1, "day": 20 },
        "event_title": "Birth of Jeffrey Epstein",
        "event_description": "Jeffrey Edward Epstein is born in Brooklyn, New York, to a working-class family and raised in Coney Island.",
        "category": "Early Life",
        "source": {
            "podcast": "The Epstein Files, Explained",
            "timestamp": "00:04:26",
            "deep_link": "https://podscripts.co/podcasts/we-can-do-hard-things-with-glennon-doyle/the-epstein-files-explained-everything-you-need-to-know-amandas-youre-not-gonna-believe-this-bs#:~:text=Starting%20point%20is%2000:04:26"
        }
    },
    {
        "date": { "year": 1974, "month": 9, "day": null },
        "event_title": "Hired at the Dalton School",
        "event_description": "At age 21, despite having no college degree, Epstein is hired as a physics and mathematics teacher at the elite Dalton School by Headmaster Donald Barr.",
        "category": "Career",
        "source": {
            "podcast": "The Epstein Files, Explained",
            "timestamp": "00:05:21",
            "deep_link": "https://podscripts.co/podcasts/we-can-do-hard-things-with-glennon-doyle/the-epstein-files-explained-everything-you-need-to-know-amandas-youre-not-gonna-believe-this-bs#:~:text=Starting%20point%20is%2000:05:21"
        },
        "external_assets": [
            { "type": "image", "url": "https://static01.nyt.com/images/2019/07/20/nyregion/12epstein-dalton/merlin_157758243_46470d6f-233b-41b7-9555-b5f674f7584d-superJumbo.jpg?quality=75&auto=webp", "label": "Mr. Epstein in the 1975 yearbook of the Dalton School" },
            { "type": "article", "url": "https://www.nytimes.com/2019/07/12/nyregion/jeffrey-epstein-dalton-teacher.html", "label": "Jeffrey Epstein Taught at Dalton. His Behavior Was Noticed." }
        ]
    },
    {
        "date": { "year": 1991, "month": 11, "day": 21 },
        "event_title": "Tribute to Robert Maxwell at Trump Plaza",
        "event_description": "Following the death of British media mogul Robert Maxwell, Epstein and Ghislaine Maxwell are photographed together at a tribute event held at the Trump Plaza Hotel.",
        "category": "Inner Circle",
        "source": {
            "podcast": "The Epstein Files, Explained",
            "timestamp": "00:14:49",
            "deep_link": "https://podscripts.co/podcasts/we-can-do-hard-things-with-glennon-doyle/the-epstein-files-explained-everything-you-need-to-know-amandas-youre-not-gonna-believe-this-bs#:~:text=Starting%20point%20is%2000:14:49"
        },
        "external_assets": [
            { "type": "image", "url": "https://pbs.twimg.com/media/GxZlovyXgAAyfUw?format=jpg&name=small", "label": "Ghislaine Maxwell & Jeffrey Epstein 1991 November at Trump Plaza Hotel" },
            { "type": "image", "url": "https://www.theguardian.com/media/2020/jul/07/fox-news-trump-epstein-maxwell-photo-cropped-out", "label": "Photo: Epstein and Maxwell at High-Society Events" }
        ]
    },
    {
        "date": { "year": 1976, "month": 6, "day": null },
        "event_title": "Dismissed from Dalton / Joins Bear Stearns",
        "event_description": "Epstein is dismissed from Dalton for 'poor performance' and immediately joins Bear Stearns as a junior assistant through a parent-teacher connection.",
        "category": "Career",
        "source": {
            "podcast": "The Epstein Files, Explained",
            "timestamp": "00:06:47",
            "deep_link": "https://podscripts.co/podcasts/we-can-do-hard-things-with-glennon-doyle/the-epstein-files-explained-everything-you-need-to-know-amandas-youre-not-gonna-believe-this-bs#:~:text=Starting%20point%20is%2000:06:47"
        }
    },
    {
        "date": { "year": 1987, "month": null, "day": null },
        "event_title": "Partnership with Leslie Wexner",
        "event_description": "Epstein forms a lucrative partnership with billionaire Les Wexner, eventually gaining power of attorney and near-total control over Wexner’s vast fortune.",
        "category": "Career / Power",
        "source": {
            "podcast": "The Epstein Files, Explained",
            "timestamp": "00:10:13",
            "deep_link": "https://podscripts.co/podcasts/we-can-do-hard-things-with-glennon-doyle/the-epstein-files-explained-everything-you-need-to-know-amandas-youre-not-gonna-believe-this-bs#:~:text=Starting%20point%20is%2000:10:13"
        },
        "external_assets": [
            { "type": "image", "url": "https://npr.brightspotcdn.com/dims4/default/389eafb/2147483647/strip/true/crop/1760x924+0+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fa3%2F8f%2F291a639c4d39b5306c26a224274f%2Fjeffrey-epstein-les-wexner.jpg", "label": "Jeffrey Epstein and Les Wexner" }
        ]
    },
    {
        "date": { "year": 1991, "month": 11, "day": 5 },
        "event_title": "Death of Robert Maxwell",
        "event_description": "Robert Maxwell is found dead off his yacht. Shortly after, his daughter Ghislaine moves to NYC and becomes Epstein's primary partner in his operations.",
        "category": "Inner Circle",
        "source": {
            "podcast": "The Epstein Files, Explained",
            "timestamp": "00:12:29",
            "deep_link": "https://podscripts.co/podcasts/we-can-do-hard-things-with-glennon-doyle/the-epstein-files-explained-everything-you-need-to-know-amandas-youre-not-gonna-believe-this-bs#:~:text=Starting%20point%20is%2000:12:29"
        }
    },
    {
        "date": { "year": 1996, "month": 8, "day": 29 },
        "event_title": "Maria Farmer Files Police Report",
        "event_description": "The first official police report against Epstein is filed by Maria Farmer with the NYPD and FBI. No meaningful action is taken by authorities.",
        "category": "Legal Battles / Systemic Failure",
        "source": {
            "podcast": "The Epstein Files, Explained",
            "timestamp": "00:17:33",
            "deep_link": "https://podscripts.co/podcasts/we-can-do-hard-things-with-glennon-doyle/the-epstein-files-explained-everything-you-need-to-know-amandas-youre-not-gonna-believe-this-bs#:~:text=Starting%20point%20is%2000:17:33"
        },
        "external_assets": [
            { "type": "image", "url": "https://www.jamesmarshlaw.com/wp-content/uploads/2025/12/EFTA00006107_Page_2.png", "label": "This 1996 report is the foundation of Maria’s negligence claim" }
        ]
    },
    {
        "date": { "year": 2005, "month": 3, "day": null },
        "event_title": "Palm Beach Investigation Begins",
        "event_description": "Palm Beach police begin a formal investigation after a 14-year-old girl’s family reports abuse at Epstein’s mansion.",
        "category": "Legal Battles",
        "source": {
            "podcast": "The Epstein Files, Explained",
            "timestamp": "00:20:31",
            "deep_link": "https://podscripts.co/podcasts/we-can-do-hard-things-with-glennon-doyle/the-epstein-files-explained-everything-you-need-to-know-amandas-youre-not-gonna-believe-this-bs#:~:text=Starting%20point%20is%2000:20:31"
        },
        "external_assets": [
            { "type": "image", "url": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5472x3648+0+0/resize/1600/quality/85/format/webp/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F6a%2Fad%2F67b2c61e465e9db656ef9245ec5f%2Fap19191708048209.jpg", "label": "The waterfront mansion of Jeffrey Epstein in Palm Beach, Fla." }
        ]
    },
    {
        "date": { "year": 2006, "month": 5, "day": 23 },
        "event_title": "FBI Opens 'Operation Leap Year'",
        "event_description": "Frustrated by the state's minor solicitation charge, Palm Beach Police Chief Michael Reeder bypasses the local state attorney and beseeches the FBI to open a federal investigation. The FBI complies, naming the case 'Operation Leap Year' because there were 29 minor victims identified at that time.",
        "category": "Legal Battles",
        "source": {
            "podcast": "The Epstein Files, Explained",
            "timestamp": "00:33:17",
            "deep_link": "https://podscripts.co/podcasts/we-can-do-hard-things-with-glennon-doyle/the-epstein-files-explained-everything-you-need-to-know-amandas-youre-not-gonna-believe-this-bs#:~:text=Starting%20point%20is%2000:33:17"
        }
    },
    {
        "date": { "year": 2006, "month": 7, "day": 19 },
        "event_title": "First State Indictment and Arrest",
        "event_description": "Following a year-long investigation by Palm Beach police, a grand jury indicts Epstein on a single felony count of solicitation of prostitution. This relatively minor charge, which ignored dozens of reports from underage victims, prompted Palm Beach Police Chief Michael Reeder to publicly accuse the state attorney of giving Epstein special treatment and to beseech the FBI to open a federal investigation.",
        "category": "Legal Battles / Systemic Failure",
        "source": {
            "podcast": "The Epstein Files, Explained",
            "timestamp": "00:32:04",
            "deep_link": "https://podscripts.co/podcasts/we-can-do-hard-things-with-glennon-doyle/the-epstein-files-explained-everything-you-need-to-know-amandas-youre-not-gonna-believe-this-bs#:~:text=Starting%20point%20is%2000:32:04"
        },
        "external_assets": [
            { "type": "image", "url": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/3000x2000+0+0/resize/1600/quality/85/format/webp/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F9e%2F8b%2F977a4f0047a0907b30aec617f3ec%2Fap19188041042053.jpg", "label": "Arrest photo from 2006" }
        ]
    },
    {
        "date": { "year": 2007, "month": 5, "day": null },
        "event_title": "Marie Villafaña Submits Draft Federal Indictment",
        "event_description": "Assistant U.S. Attorney Marie Villafaña submits a 53-page draft indictment outlining 60 criminal counts against Epstein, along with an 82-page prosecution memo. The case is considered 'open and shut' and could have imprisoned Epstein for life, but the indictment is never filed due to the subsequent secret NPA negotiations.",
        "category": "Legal Battles",
        "source": {
            "podcast": "Interview with Brad Edwards",
            "timestamp": "00:06:09",
            "deep_link": "https://podscripts.co/podcasts/we-can-do-hard-things-with-glennon-doyle/epstein-survivors-attorney-who-exposed-government-conspiracy-brad-edwards#:~:text=Starting%20point%20is%2000:06:09"
        }
    },
    {
        "date": { "year": 2007, "month": 9, "day": 24 },
        "event_title": "Secret Non-Prosecution Agreement (NPA)",
        "event_description": "Federal prosecutors in Florida, led by Alexander Acosta, sign a secret deal granting immunity to Epstein and all unnamed co-conspirators.",
        "category": "Legal Battles / Collusion",
        "source": {
            "podcast": "Interview with Brad Edwards",
            "timestamp": "00:15:07",
            "deep_link": "https://podscripts.co/podcasts/we-can-do-hard-things-with-glennon-doyle/epstein-survivors-attorney-who-exposed-government-conspiracy-brad-edwards#:~:text=Starting%20point%20is%2000:15:07"
        }
    },
    {
        "date": { "year": 2008, "month": 5, "day": null },
        "event_title": "Brad Edwards Meets Courtney Wilde",
        "event_description": "Survivor Courtney Wilde hires Brad Edwards. She reveals the FBI told her to stay quiet about an 'active' case that had already been secretly settled.",
        "category": "Hero / Survivor",
        "source": {
            "podcast": "Interview with Brad Edwards",
            "timestamp": "00:04:44",
            "deep_link": "https://podscripts.co/podcasts/we-can-do-hard-things-with-glennon-doyle/epstein-survivors-attorney-who-exposed-government-conspiracy-brad-edwards#:~:text=Starting%20point%20is%2000:04:44"
        }
    },
    {
        "date": { "year": 2008, "month": 6, "day": 30 },
        "event_title": "State Conviction and Sentencing",
        "event_description": "Epstein pleads guilty to state charges in Florida. He is sentenced to 18 months but is granted extraordinary work-release privileges.",
        "category": "Legal Battles",
        "source": {
            "podcast": "The Epstein Files, Explained",
            "timestamp": "00:39:24",
            "deep_link": "https://podscripts.co/podcasts/we-can-do-hard-things-with-glennon-doyle/the-epstein-files-explained-everything-you-need-to-know-amandas-youre-not-gonna-believe-this-bs#:~:text=Starting%20point%20is%2000:39:24"
        }
    },
    {
        "date": { "year": 2009, "month": 7, "day": 22 },
        "event_title": "Epstein Released from County Jail",
        "event_description": "After serving only 13 months of an 18-month sentence, Epstein is released from the Palm Beach County Jail. He immediately returns to high society, later hosting a large party in New York City in 2010 to signal his 'return' to elite circles.",
        "category": "Legal Battles",
        "source": {
            "podcast": "The Epstein Files, Explained",
            "timestamp": "00:41:41",
            "deep_link": "https://podscripts.co/podcasts/we-can-do-hard-things-with-glennon-doyle/the-epstein-files-explained-everything-you-need-to-know-amandas-youre-not-gonna-believe-this-bs#:~:text=Starting%20point%20is%2000:41:41"
        }
    },
    {
        "date": { "year": 2011, "month": 3, "day": 2 },
        "event_title": "Virginia Giuffre's Daily Mail Interview",
        "event_description": "The Daily Mail publishes an explosive interview with Virginia Giuffre and a photo of her with Prince Andrew. This marks the first time a survivor's claims against Epstein's powerful associates receive massive international press coverage.",
        "category": "Publicity / Journalism",
        "source": {
            "podcast": "Interview with Brad Edwards",
            "timestamp": "01:10:22",
            "deep_link": "https://podscripts.co/podcasts/we-can-do-hard-things-with-glennon-doyle/epstein-survivors-attorney-who-exposed-government-conspiracy-brad-edwards#:~:text=Starting%20point%20is%2001:10:22"
        },
        "external_assets": [
            { "type": "image", "url": "https://ichef.bbci.co.uk/news/1536/cpsprodpb/1f09/live/54e99000-ad05-11f0-ba75-093eca1ac29b.png.webp", "label": "Virginia Giuffre, Prince Andrew, and Ghislaine Maxwell" }
        ]
    },
    {
        "date": { "year": 2018, "month": 11, "day": null },
        "event_title": "Miami Herald Exposes the Secret Deal",
        "event_description": "Julie K. Brown publishes the 'Perversion of Justice' series, bringing global attention back to the case and the 2007 secret agreement.",
        "category": "Publicity / Journalism",
        "source": {
            "podcast": "The Epstein Files, Explained",
            "timestamp": "00:50:08",
            "deep_link": "https://podscripts.co/podcasts/we-can-do-hard-things-with-glennon-doyle/the-epstein-files-explained-everything-you-need-to-know-amandas-youre-not-gonna-believe-this-bs#:~:text=Starting%20point%20is%2000:50:08"
        }
    },
    {
        "date": { "year": 2019, "month": 2, "day": 21 },
        "event_title": "Court Rules NPA Violated Victims' Rights",
        "event_description": "A federal judge rules that the 2007 NPA was illegal because prosecutors intentionally kept it a secret from the victims.",
        "category": "Legal Battles",
        "source": {
            "podcast": "Interview with Brad Edwards",
            "timestamp": "00:43:51",
            "deep_link": "https://podscripts.co/podcasts/we-can-do-hard-things-with-glennon-doyle/epstein-survivors-attorney-who-exposed-government-conspiracy-brad-edwards#:~:text=Starting%20point%20is%2000:43:51"
        }
    },
    {
        "date": { "year": 2019, "month": 7, "day": 6 },
        "event_title": "Federal Arrest in New York",
        "event_description": "Epstein is arrested at Teterboro Airport on new federal charges. Brad Edwards recounts his secret coordination with the SDNY to track Epstein's movements.",
        "category": "Legal Battles",
        "source": {
            "podcast": "Interview with Brad Edwards",
            "timestamp": "00:45:39",
            "deep_link": "https://podscripts.co/podcasts/we-can-do-hard-things-with-glennon-doyle/epstein-survivors-attorney-who-exposed-government-conspiracy-brad-edwards#:~:text=Starting%20point%20is%2000:45:39"
        },
        "external_assets": [
            { "type": "image", "url": "data:image/jpeg;base64,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", "label": "Photo of Jeffrey Epstein taken for the New York State Division of Criminal Justice Services" }
        ]
    },
    {
        "date": { "year": 2019, "month": 8, "day": 10 },
        "event_title": "Death in Custody",
        "event_description": "Epstein is found dead in his Manhattan cell. His death remains a subject of intense controversy due to a series of security and procedural failures.",
        "category": "Legal Battles",
        "source": {
            "podcast": "The Epstein Files, Explained",
            "timestamp": "00:52:28",
            "deep_link": "https://podscripts.co/podcasts/we-can-do-hard-things-with-glennon-doyle/the-epstein-files-explained-everything-you-need-to-know-amandas-youre-not-gonna-believe-this-bs#:~:text=Starting%20point%20is%2000:52:28"
        }
    },
    {
        "date": { "year": 2019, "month": 8, "day": 27 },
        "event_title": "Survivor Testimony in Manhattan Court",
        "event_description": "Following Epstein's death, Judge Richard Berman holds a monumental hearing where he allows survivors to speak on the record. Courtney Wilde and many others provide harrowing testimony, marking the first time many were treated with respect and dignity by a person in authority.",
        "category": "Hero / Survivor",
        "source": {
            "podcast": "Interview with Brad Edwards",
            "timestamp": "00:48:59",
            "deep_link": "https://podscripts.co/podcasts/we-can-do-hard-things-with-glennon-doyle/epstein-survivors-attorney-who-exposed-government-conspiracy-brad-edwards#:~:text=Starting%20point%20is%2000:48:59"
        }
    },
    {
        "date": { "year": 2023, "month": 6, "day": 12 },
        "event_title": "JP Morgan & Deutsche Bank Settlements",
        "event_description": "Brad Edwards leads litigation against major banks, resulting in over $365 million in settlements for survivors whose abuse was facilitated by the banks.",
        "category": "Legal Battles / Restitution",
        "source": {
            "podcast": "Interview with Brad Edwards",
            "timestamp": "01:13:41",
            "deep_link": "https://podscripts.co/podcasts/we-can-do-hard-things-with-glennon-doyle/epstein-survivors-attorney-who-exposed-government-conspiracy-brad-edwards#:~:text=Starting%20point%20is%2001:13:41"
        }
    },
    {
        "date": { "year": 2025, "month": 11, "day": 12 },
        "event_title": "Adelita Grijalva Signs Discharge Petition",
        "event_description": "After a 50-day swearing-in delay by House leadership, newly elected Rep. Adelita Grijalva provides the final signature needed for the discharge petition. This forces the House to vote on the Epstein Files Transparency Act, bypassing Republican leadership's refusal to bring it to the floor.",
        "category": "Recent Developments",
        "source": {
            "podcast": "The Epstein Files, Explained",
            "timestamp": "01:04:31",
            "deep_link": "https://podscripts.co/podcasts/we-can-do-hard-things-with-glennon-doyle/the-epstein-files-explained-everything-you-need-to-know-amandas-youre-not-gonna-believe-this-bs#:~:text=Starting%20point%20is%2001:04:31"
        }
    },
    {
        "date": { "year": 2025, "month": 11, "day": 18 },
        "event_title": "Epstein Files Transparency Act Passed",
        "event_description": "Legislation is signed into law mandating the release of millions of DOJ documents that have been withheld for years.",
        "category": "Recent Developments",
        "source": {
            "podcast": "The Epstein Files, Explained",
            "timestamp": "01:04:31",
            "deep_link": "https://podscripts.co/podcasts/we-can-do-hard-things-with-glennon-doyle/the-epstein-files-explained-everything-you-need-to-know-amandas-youre-not-gonna-believe-this-bs#:~:text=Starting%20point%20is%2001:04:31"
        },
        "external_assets": [
            {
                "type": "image",
                "url": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4803x3202+0+0/resize/4803x3202!/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F7a%2F14%2F841617714dbabba207c0f7ced0b2%2Fgettyimages-2247297384.jpg",
                "label": "Rep. Thomas Massie, R-Ky., speaks alongside U.S. Rep. Ro Khanna, D-Calif., and Rep. Marjorie Taylor Greene, R-Ga."
            }
        ]
    },
    {
        "date": { "year": 2026, "month": 2, "day": 6 },
        "event_title": "DOJ Document Dump & Privacy Violations",
        "event_description": "A tranche of 3.5 million pages is released with over 20,000 failed redactions, revealing the identities and medical records of nearly 100 survivors.",
        "category": "Recent Developments",
        "source": {
            "podcast": "Interview with Brad Edwards",
            "timestamp": "00:58:48",
            "deep_link": "https://podscripts.co/podcasts/we-can-do-hard-things-with-glennon-doyle/epstein-survivors-attorney-who-exposed-government-conspiracy-brad-edwards#:~:text=Starting%20point%20is%2000:58:48"
        }
    },
    {
        "date": { "year": 2026, "month": 2, "day": 10 },
        "event_title": "Case Declared Closed",
        "event_description": "The DOJ officially closes the Epstein investigation, drawing sharp criticism from survivors who say millions of documents remain hidden.",
        "category": "Recent Developments",
        "source": {
            "podcast": "The Epstein Files, Explained",
            "timestamp": "01:06:38",
            "deep_link": "https://podscripts.co/podcasts/we-can-do-hard-things-with-glennon-doyle/the-epstein-files-explained-everything-you-need-to-know-amandas-youre-not-gonna-believe-this-bs#:~:text=Starting%20point%20is%2001:06:38"
        }
    }
];
