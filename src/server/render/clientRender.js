/* eslint-disable consistent-return */
import html from './html';

import initialState from './initialState';

export default function clientRender() {
  return (req, res, next) => {
    if (req.isBot) {
      return next();
    }

    res.send(html({
      title: 'Codejobs',
      initialState: initialState(req),
    }));
  };
}
