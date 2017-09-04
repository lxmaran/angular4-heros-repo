import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/toPromise';

import Hero from "../domain/hero";

@Injectable()
export default class HeroService{

    private api:string = 'api/heroes';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    getHeroes(): Promise<Hero[]>{
        return this.http
        .get(this.api)
        .toPromise()
        .then( data => data.json().data as Hero[])
        .catch(this.errorHandler);
    }

    errorHandler(err: any): Promise<any>{
        console.log('Err: ', err);
        return Promise.reject(err.message || err);
    }

    getHero(id:number): Promise<Hero>{
        return this.http
        .get(this.api + `/${id}`)
        .toPromise()
        .then( data => data.json().data as Hero[])
        .catch(this.errorHandler);
    }

    updateHero(hero: Hero): Promise<void>{
        return this.http
            .put(this.api + `/${hero.id}`, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(data=>data)
            .catch(this.errorHandler)
    }

    addHero(name:string): Promise<Hero>{
        return this.http
            .post(this.api, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(data => data.json().data as Hero)
            .catch(this.errorHandler)
    }

    delete(id:number): Promise<void>{
        return this.http
            .delete(this.api + `/${id}`)
            .toPromise()
            .then()
            .catch(this.errorHandler)
    }
}
