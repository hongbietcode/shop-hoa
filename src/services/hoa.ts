import { instance } from './instance';

class HoaApi {
    get = (query?: IQueryHoa) =>
        instance.get<IApiResult<IHoa[]>>('/api/hoa', {
            params: query,
        });
    detail = () => instance.get<IApiResult<IHoa>>('/api/hoa/1');
    post = (data: IHoa) => instance.post<IApiResult<IHoa>>('/api/hoa', data);
    put = (id: string, data: IHoa) => instance.put<IApiResult<IHoa>>(`/api/hoa/${id}`, data);
}

const hoaApi = new HoaApi();

export default hoaApi;