// COVERS ALL SELECTORS' OPTIONS OTHER THAN SUBCATEGORIES (HANDLED IN A SEPARATE DATA FILE)

import {
    DurationOption,
    ComparisonOptionAvailableFor4WeekDuration,
    ComparisonOptionAvailableFor12WeekDuration,
    ComparisonOptionAvailableFor26WeekDuration,
    ComparisonOptionAvailableFor52WeekDuration,
    DateOptionsObject,
} from '../sharedTypes'

export const durationOptions = {
    '4 weeks': undefined,
    '12 weeks': undefined,
    '26 weeks': undefined,
    '52 weeks': undefined
}

export const dateOptionsFor4WeekDuration = {
    '12 Feb 2018 - 11 Mar 2018': undefined,
    '05 Feb 2018 - 04 Mar 2018': undefined,
    '29 Jan 2018 - 25 Feb 2018': undefined,
    '22 Jan 2018 - 18 Feb 2018': undefined,
    '15 Jan 2018 - 11 Feb 2018': undefined,
    '08 Jan 2018 - 04 Feb 2018': undefined,
    '01 Jan 2018 - 28 Jan 2018': undefined,
    '25 Dec 2017 - 21 Jan 2018': undefined,
    '18 Dec 2017 - 14 Jan 2018': undefined,
    '11 Dec 2017 - 07 Jan 2018': undefined,
    '04 Dec 2017 - 31 Dec 2017': undefined,
    '27 Nov 2017 - 24 Dec 2017': undefined,
    '20 Nov 2017 - 17 Dec 2017': undefined,
    '13 Nov 2017 - 10 Dec 2017': undefined,
    '06 Dec 2017 - 03 Dec 2017': undefined,
}

export const dateOptionsFor12WeekDuration = {
    '11 Dec 2017 - 11 Mar 2018': undefined,
    '04 Dec 2017 - 04 Mar 2018': undefined,
    '27 Nov 2017 - 25 Feb 2018': undefined,
    '20 Nov 2017 - 18 Feb 2018': undefined,
    '13 Nov 2017 - 11 Feb 2018': undefined,
    '06 Nov 2017 - 04 Feb 2018': undefined,
    '30 Oct 2017 - 28 Jan 2018': undefined,
    '23 Oct 2017 - 21 Jan 2018': undefined,
    '16 Oct 2017 - 14 Jan 2018': undefined,
    '09 Oct 2017 - 07 Jan 2018': undefined,
    '02 Oct 2017 - 31 Dec 2017': undefined,
    '25 Sept 2017 - 24 Dec 2017': undefined,
    '18 Sept 2017 - 17 Dec 2017': undefined,
    '11 Sept 2017 - 10 Dec 2017': undefined,
    '04 Sept 2017 - 03 Dec 2017': undefined,
}

export const dateOptionsFor26WeekDuration = {
    '31 Aug 2017 - 11 Mar 2018': undefined,
    '24 Aug 2017 - 04 Mar 2018': undefined,
    '14 Aug 2017 - 25 Feb 2018': undefined,
    '07 Aug 2017 - 18 Feb 2018': undefined,
    '31 Jul 2017 - 11 Feb 2018': undefined,
    '24 Jul 2017 - 04 Feb 2018': undefined,
    '17 Jul 2017 - 28 Jan 2018': undefined,
    '10 Jul 2017 - 21 Jan 2018': undefined,
    '03 Jul 2017 - 14 Jan 2018': undefined,
    '26 Jun 2017 - 07 Jan 2018': undefined,
    '19 Jun 2017 - 31 Dec 2017': undefined,
    '12 Jun 2017 - 24 Dec 2017': undefined,
    '05 Jun 2017 - 17 Dec 2017': undefined,
    '29 May 2017 - 10 Dec 2017': undefined,
    '22 May 2017 - 03 Dec 2017': undefined,
}

export const dateOptionsFor52WeekDuration = {
    '13 Mar 2017 - 11 Mar 2018': undefined,
    '06 Mar 2017 - 04 Mar 2018': undefined,
    '27 Feb 2017 - 25 Feb 2018': undefined,
    '20 Feb 2017 - 18 Feb 2018': undefined,
    '13 Feb 2017 - 11 Feb 2018': undefined,
    '06 Feb 2017 - 04 Feb 2018': undefined,
    '30 Jan 2017 - 28 Jan 2018': undefined,
    '23 Jan 2017 - 21 Jan 2018': undefined,
    '16 Jan 2017 - 14 Jan 2018': undefined,
    '09 Jan 2017 - 07 Jan 2018': undefined,
    '02 Jan 2017 - 31 Dec 2017': undefined,
    '26 Dec 2016 - 24 Dec 2017': undefined,
    '19 Dec 2016 - 17 Dec 2017': undefined,
    '12 Dec 2016 - 10 Dec 2017': undefined,
    '05 Dec 2016 - 03 Dec 2017': undefined,
}

export const storeFormatOptions = {
    'All store formats': undefined,
    'Express stores': undefined,
    'Metro stores': undefined,
    'Extra stores': undefined,
    'Online': undefined
}

export const regionOptions = {
    'All regions': undefined,
    'North region': undefined,
    'Central region': undefined,
    'West region': undefined,
    'South region': undefined,
}

export const customerSegmentOptions = {
    'All customer segments': undefined,
    'Young single person': undefined,
    'Family with young children': undefined,
    'Post family': undefined,
    'Older person': undefined,
}

export const measureOptions = {
    'Sales value': undefined,
    'Spend per customer': undefined,
    'Customers': undefined,
    'Retailer visits': undefined,
    'Spend per visit': undefined,
    'Units per visit': undefined,
    'Basket penetration': undefined,
    'Frequency of purchase': undefined,
    'Sales units': undefined,
}
