import { API } from './API';

export interface IDragon {
  id: string
  createdAt: Date,
  name: string
  type: string
  histories: string
  history: string
  imageUrl: string
}

class DragonService {

  getDragons = () => {
    const URL = '/dragon';
    return API.get<IDragon[]>(URL).then((response: any) => response.data);
  };

  getDragonById = (id: string) => {
    const URL = `/dragon/${id}`;
    return API.get<IDragon>(URL).then((response: any) => response.data);
  };

  createDragon = (dragon: IDragon) => {
    const URL = '/dragon';
    return API.post<IDragon>(URL, dragon).then((response: any) => response.data);
  };

  updateDragon = (dragon: IDragon) => {
    const URL = `/dragon/${dragon.id}`;
    return API.put<IDragon>(URL, dragon).then((response: any) => response.data);
  };

  deleteDragonById = (id: string) => {
    const URL = `/dragon/${id}`;
    return API.delete<IDragon>(URL).then((response: any) => response.data);
  };
  
}

const instance = new DragonService();

export { instance as DragonService };
