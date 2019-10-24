/**
 * These are mock dependencies
 */
import { Response } from './response';

export const RESPONSES: Response[] = [
    {
        id: 51, questionId: 11, expertName: 'BillHawkes',
        text: 'dont use inline JS, Use addEventListener(), Use Event.key to determine the pressed key, Use a helper function to determine if the current Event.target is a FormElement',
        date: '10/21/2019'
    },
    {
        id: 52, questionId: 11, expertName: 'ElizabethSwann',
        text: 'You can add a listener on window if you want to trigger your function everywhere of your html.  Here you can find all key codes for keyboard: https://keycode.info/',
        date: '10/22/2019'
    },
    {
        id: 53, questionId: 11, expertName: 'JohnRevature',
        text: 'Use the right tool for the job, considering what youre trying to accomplish, your experience level, the performance requirements of the project, etc., etc., none of which you have specified (or could specify in the space of a few paragraphs)',
        date: '10/22/2019'
    },
]