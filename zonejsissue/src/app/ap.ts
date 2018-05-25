import {HttpResponse} from '@angular/common/http/src/response';

export interface AP {
    request(url: string): Promise<HttpResponse<string>>;
    request(options: Object): Promise<HttpResponse<string>>;
}
