import { HouseJob, V1, V2, V4, V5, V6 } from "./types";
import { houseCommittees } from "../../statics";

const jobCreator = <T>(
  committee: houseCommittees,
  name: string,
  link: string,
  details: T
): HouseJob<T> => ({
  collection: "houseCommittee",
  committee,
  name,
  link,
  details,
});

const hjud: HouseJob<V1> = jobCreator(
  "hjud",
  "House Judicary Committee Hearings and Markups",
  "https://judiciary.house.gov/calendar/eventslisting.aspx?EventTypeID=0&CategoryID=0&Congress=&Count=10",
  {
    version: "puppeteerv1",
    layerOne: {
      depth: 10,
      rows: "li.calendar-item",
    },
    layerTwo: {
      title: "h3.news-titler",
      time: true,
      date: true,
      location: { label: true, value: "div.events-location strong" },
    },
  }
);

const hrle: HouseJob<V6> = jobCreator(
  "hrle",
  "House Rules Committee",
  "https://rules.house.gov/media",
  {
    version: "puppeteerv6",
    layerOne: {
      depth: 10,
      filter: { keyword: "meeting", selector: "h3" },
      rows: "div.view-content .views-row",
    },
    layerTwo: {
      title: ".title",
      time: true,
      date: true,
    },
  }
);

const hfac: HouseJob<V1> = jobCreator(
  "hfac",
  "House Foreign Affairs Committee Markups",
  "https://foreignaffairs.house.gov/markups",
  {
    version: "puppeteerv1",
    layerOne: {
      depth: 1,
      rows: "table tbody tr",
    },
    layerTwo: {
      title: ".title",
      date: { label: false, value: "span.date" },
      time: { label: false, value: "span.time" },
      location: { label: true, value: "span.location strong" },
      //witnesses: "div.witnesses strong",
    },
  }
);

const hasc: HouseJob<V1> = jobCreator(
  "hasc",
  "House Armed Services Committee",
  "https://armedservices.house.gov/hearings",
  {
    version: "puppeteerv1",
    layerOne: {
      depth: 10,
      rows: "table tbody tr",
    },
    layerTwo: {
      title: ".title",
      date: { label: false, value: "span.date:first-of-type" },
      time: true,
    },
  }
);

const hvac: HouseJob<V1>[] = [
  jobCreator(
    "hvac",
    "House Veterans Affairs Committee Hearings",
    "https://veterans.house.gov/events/hearings",
    {
      version: "puppeteerv1",
      layerOne: {
        depth: 10,
        rows: "tr.vevent",
      },
      layerTwo: {
        title: "h1.main_page_title",
        date: { label: false, value: "p.hearing__date date" },
        time: { label: true, value: "p.hearing__time time b" },
        location: { label: false, value: "p.hearing__location b" },
      },
    }
  ),
  jobCreator(
    "hvac",
    "House Veterans Affairs Committee Markups",
    "https://veterans.house.gov/events/markups",
    {
      version: "puppeteerv1",
      layerOne: {
        depth: 10,
        rows: "tr.vevent",
      },
      layerTwo: {
        title: "h1.main_page_title",
        date: { label: false, value: "p.hearing__date date" },
        time: { label: true, value: "p.hearing__time time b" },
        location: { label: false, value: "p.hearing__location b" },
      },
    }
  ),
];

const hhsc: HouseJob<V2>[] = [
  jobCreator(
    "hhsc",
    "House Homeland Security Committee Hearings",
    "http://homeland.house.gov/activities/hearings",
    {
      version: "puppeteerv2",
      layerOne: {
        depth: 10,
        rows: "tr.vevent",
        date: { selector: "time.dtstart", instance: 0 },
        time: { selector: "time.dtstart", instance: 1 },
        location: "span.location",
      },
    }
  ),
  jobCreator(
    "hhsc",
    "House Homeland Security Committee Markups",
    "http://homeland.house.gov/activities/markups",
    {
      version: "puppeteerv2",
      layerOne: {
        depth: 10,
        rows: "tr.vevent",
        date: { selector: "time.dtstart", instance: 0 },
        time: { selector: "time.dtstart", instance: 1 },
        location: "span.location",
      },
    }
  ),
];

const hagc: HouseJob<V1> = jobCreator(
  "hagc",
  "House Agriculture Committee Hearings",
  "https://agriculture.house.gov/calendar/",
  {
    version: "puppeteerv1",
    layerOne: {
      depth: 10,
      rows: "ul.calendar-listing li",
    },
    layerTwo: {
      title: "h3.news-titler",
      time: true,
      date: true,
    },
  }
);

const hapc: HouseJob<V4>[] = [
  jobCreator(
    "hapc",
    "House Appropriations Committee Hearings",
    "https://appropriations.house.gov/events/hearings",
    {
      version: "puppeteerv4",
      layerOne: {
        depth: 10,
        upcomingHearings: ".pane-content",
        hearings: ".views-row",
        dateTime: ".views-field-field-congress-meeting-date",
        time: "div.newsie-details span:nth-child(2)",
        location: ".views-field-field-congress-meeting-location",
      },
    }
  ),
  jobCreator(
    "hapc",
    "House Appropriations Committee Markups",
    "https://appropriations.house.gov/events/markups",
    {
      version: "puppeteerv4",
      layerOne: {
        depth: 10,
        upcomingHearings: ".pane-content",
        hearings: ".views-row",
        dateTime: ".views-field-field-congress-meeting-date",
        time: "div.newsie-details span:nth-child(2)",
        location: ".views-field-field-congress-meeting-location",
      },
    }
  ),
];

const hbuc: HouseJob<V4>[] = [
  jobCreator(
    "hbuc",
    "House Budget Committee Hearings",
    "https://budget.house.gov/legislation/hearings",
    {
      version: "puppeteerv4",
      layerOne: {
        depth: 10,
        upcomingHearings: ".pane-content",
        hearings: ".views-row",
        dateTime: ".views-field-field-congress-meeting-date",
        time: "div.newsie-details span:nth-child(2)",
      },
    }
  ),
  jobCreator(
    "hbuc",
    "House Budget Committee Markups",
    "https://budget.house.gov/legislation/markups",
    {
      version: "puppeteerv4",
      layerOne: {
        depth: 10,
        upcomingHearings: ".pane-content",
        hearings: ".views-row",
        dateTime: ".views-field-field-congress-meeting-date",
        time: "div.newsie-details span:nth-child(2)",
      },
    }
  ),
];

const help: HouseJob<V1>[] = [
  jobCreator(
    "help",
    "House Education and Labor Committee Hearings",
    "https://edlabor.house.gov/hearings-and-events",
    {
      version: "puppeteerv1",
      layerOne: {
        depth: 10,
        rows: "tr.vevent",
      },
      layerTwo: {
        title: "h1.main_page_title",
        date: { label: true, value: "span.date b" },
        time: { label: true, value: "span.time b" },
        location: { label: true, value: "span.location" },
      },
    }
  ),
  jobCreator(
    "help",
    "House Education and Labor Committee Markups",
    "https://edlabor.house.gov/markups",
    {
      version: "puppeteerv1",
      layerOne: {
        depth: 10,
        rows: "tr.vevent",
      },
      layerTwo: {
        title: "h1.main_page_title",
        date: { label: true, value: "span.date b" },
        time: { label: true, value: "span.time b" },
        location: { label: true, value: "span.location b" },
      },
    }
  ),
];

const nrgy: HouseJob<V2>[] = [
  jobCreator(
    "nrgy",
    "House Energy and Commerce Committee Hearings",
    "https://energycommerce.house.gov/committee-activity/hearings",
    {
      version: "puppeteerv2",
      layerOne: {
        depth: 10,
        rows: ".views-row",
        date: { selector: ".date-display-single", instance: 0 },
        splitDate: "-",
        location: ".views-field-field-congress-meeting-location",
      },
    }
  ),
  jobCreator(
    "nrgy",
    "House Energy and Commerce Committee Markups",
    "https://energycommerce.house.gov/committee-activity/markups",
    {
      version: "puppeteerv2",
      layerOne: {
        depth: 10,
        rows: ".views-row",
        date: { selector: ".date-display-single", instance: 0 },
        splitDate: "-",
        location: ".views-field-field-congress-meeting-location",
      },
    }
  ),
];

const fisv: HouseJob<V5>[] = [
  jobCreator(
    "fisv",
    "House Financial Services Committee Hearings",
    "https://financialservices.house.gov/calendar/?EventTypeID=577&Congress=116",
    {
      version: "puppeteerv5",
      layerOne: {
        depth: 8,
        rows: ".newsie-titler",
      },
      layerTwo: {
        title: "h3.news-titler",
        jquerySelector: ".topnewstext",
        locationIndex: 0,
        dateIndex: 1,
        timeIndex: 2,
      },
    }
  ),
  jobCreator(
    "fisv",
    "House Financial Services Committee Markups",
    "https://financialservices.house.gov/calendar/?EventTypeID=575&Congress=116",
    {
      version: "puppeteerv5",
      layerOne: {
        depth: 8,
        rows: ".newsie-titler",
      },
      layerTwo: {
        title: "h3.news-titler",
        jquerySelector: ".topnewstext",
        locationIndex: 0,
        dateIndex: 1,
        timeIndex: 2,
      },
    }
  ),
];

const admn: HouseJob<V2>[] = [
  jobCreator(
    "admn",
    "House Administration Committee Hearings",
    "https://cha.house.gov/committee-activity/hearings",
    {
      version: "puppeteerv2",
      layerOne: {
        depth: 10,
        rows: ".view-content",
        date: { selector: ".date-display-single", instance: 0 },
        splitDate: "-",
        location: ".views-field-field-congress-meeting-location",
      },
    }
  ),
  // EDIT -- MUST ADD BUSINESS MEETINGS
  jobCreator(
    "admn",
    "House Administration Committee Markups",
    "https://cha.house.gov/committee-activity/markups",
    {
      version: "puppeteerv2",
      layerOne: {
        depth: 10,
        rows: ".views-row",
        date: { selector: ".date-display-single", instance: 0 },
        splitDate: "-",
        location: ".views-field-field-congress-meeting-location",
      },
    }
  ),
];

const ntty: HouseJob<V2> = jobCreator(
  "ntty",
  "House Natural Resources Committee Hearings",
  "https://naturalresources.house.gov/hearings",
  {
    version: "puppeteerv2",
    layerOne: {
      depth: 10,
      rows: "tr.vevent",
      date: { selector: "time.dtstart", instance: 0 },
      splitDate: " ",
      location: "span.location",
    },
  }
);

const ovst: HouseJob<V2>[] = [
  jobCreator(
    "ovst",
    "House Oversight Committee Hearings",
    "https://oversight.house.gov/legislation/hearings",
    {
      version: "puppeteerv2",
      layerOne: {
        depth: 10,
        rows: ".views-row",
        date: { selector: "span.date-display-single", instance: 0 },
        splitDate: "-",
        location: ".views-field-field-congress-meeting-location .field-content",
      },
    }
  ),
  jobCreator(
    "ovst",
    "House Oversight Committee Markups",
    "https://oversight.house.gov/legislation/business-meetings",
    {
      version: "puppeteerv2",
      layerOne: {
        depth: 10,
        rows:
          ".pane-cng-meetings-panel-pane-business-meetings-upcoming .views-row",
        date: { selector: "span.date-display-single", instance: 0 },
        splitDate: "-",
        location: ".views-field-field-congress-meeting-location .field-content",
      },
    }
  ),
  jobCreator(
    "ovst",
    "House Oversight Committee Briefings",
    "https://oversight.house.gov/legislation/briefings",
    {
      version: "puppeteerv2",
      layerOne: {
        depth: 10,
        rows: ".views-row",
        splitDate: "-",
        date: { selector: "span.date-display-single", instance: 0 },
      },
    }
  ),
];

const scnc: HouseJob<V2>[] = [
  jobCreator(
    "scnc",
    "House Science Committee Hearings",
    "https://science.house.gov/hearings",
    {
      version: "puppeteerv2",
      layerOne: {
        depth: 10,
        rows: "#hearings--upcoming div.hearing",
        date: { selector: ".hearing__date", instance: 0 },
        time: { selector: ".hearing__time time", instance: 0 },
        location: ".hearing__location",
      },
    }
  ),
  jobCreator(
    "scnc",
    "House Science Committee Markups",
    "https://science.house.gov/markups",
    {
      version: "puppeteerv2",
      layerOne: {
        depth: 10,
        rows: "#hearings--upcoming div.hearing",
        date: { selector: ".hearing__date", instance: 0 },
        time: { selector: ".hearing__time time", instance: 0 },
        location: ".hearing__location",
      },
    }
  ),
];

const smbs: HouseJob<V5> = jobCreator(
  "smbs",
  "House Small Business Committee Hearings and Markups",
  "https://smallbusiness.house.gov/activity/",
  {
    version: "puppeteerv5",
    layerOne: {
      depth: 3,
      rows: "ul.calendar-listing li",
    },
    layerTwo: {
      title: "h3.news-titler",
      jquerySelector: ".topnewstext",
      locationIndex: null,
      dateIndex: 0,
      timeIndex: 1,
    },
  }
);

const trns: HouseJob<V2>[] = [
  jobCreator(
    "trns",
    "House Transportation Committee Hearings",
    "https://transportation.house.gov/committee-activity/hearings",
    {
      version: "puppeteerv2",
      layerOne: {
        depth: 10,
        rows: "div.hearings-table table tr.vevent",
        date: { selector: "time.dtstart", instance: 0 },
        time: { selector: "time.dtstart", instance: 1 }, // Zero indexed, second option
        location: "span.location",
      },
    }
  ),
  jobCreator(
    "trns",
    "House Transportation Committee Markups",
    "https://transportation.house.gov/committee-activity/markups",
    {
      version: "puppeteerv2",
      layerOne: {
        depth: 10,
        rows: "div.hearings-table table tr.vevent",
        date: { selector: "time.dtstart", instance: 0 },
        time: { selector: "time.dtstart", instance: 1 }, // Zero indexed, second option
      },
    }
  ),
];

const wymn: HouseJob<V1>[] = [
  jobCreator(
    "wymn",
    "House Ways and Means Committee Hearings",
    "https://waysandmeans.house.gov/legislation/hearings",
    {
      version: "puppeteerv1",
      layerOne: {
        depth: 10,
        rows: ".pane-congress-hearings-panel-pane-hearings-upcoming .views-row",
      },
      layerTwo: {
        date: { label: false, value: "span.date-display-single" },
        title: "h1.title",
        splitDate: "-",
        location: {
          label: false,
          value: ".field-name-field-congress-meeting-location .field-label",
        },
      },
    }
  ),
  jobCreator(
    "wymn",
    "House Ways and Means Committee Markups",
    "https://waysandmeans.house.gov/legislation/markups",
    {
      version: "puppeteerv1",
      layerOne: {
        depth: 10,
        rows: ".pane-congress-markups-panel-pane-markups-upcoming .views-row",
      },
      layerTwo: {
        title: "h1.title",
        date: { label: false, value: "span.date-display-single" },
        splitDate: "-",
        location: {
          label: false,
          value: ".field-name-field-congress-meeting-location .field-label",
        },
      },
    }
  ),
];

const clmt: HouseJob<V2> = jobCreator(
  "clmt",
  "House Climate Committee Hearings",
  "https://climatecrisis.house.gov/committee-activity/hearings",
  {
    version: "puppeteerv2",
    layerOne: {
      depth: 10,
      rows: ".views-row",
      date: { selector: "span.date-display-single", instance: 0 },
      splitDate: "-",
    },
  }
);

export const house: (
  | HouseJob<V1>
  | HouseJob<V2>
  | HouseJob<V4>
  | HouseJob<V5>
  | HouseJob<V6>
)[] = [
  ...admn,
  hfac,
  hagc,
  ...hapc,
  hasc,
  ...hbuc,
  clmt,
  ...help,
  ...nrgy,
  ...fisv,
  hjud,
  hrle,
  ...hhsc,
  ntty,
  ...ovst,
  ...scnc,
  smbs,
  ...trns,
  ...hvac,
  ...wymn,
];
