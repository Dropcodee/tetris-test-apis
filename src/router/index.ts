import { NOT_FOUND_ERROR_MSG } from '../helpers/constants/error.constant';
import { NotFoundException } from '../helpers/errors/NotFoundException';
import defaultRouter from './default.router'
import favoriteRouter from './favorite.router';

function routes(app: any) {
  app.use('/', defaultRouter);
  app.use('/repos/favorites', favoriteRouter);
  app.all('*', () => {
    throw new NotFoundException(NOT_FOUND_ERROR_MSG);
  });
}
export default routes
