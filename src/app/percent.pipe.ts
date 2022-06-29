import { Pipe, PipeTransform } from "@angular/core";
@Pipe ({name : 'percentages'})
export class PercentPipe implements PipeTransform{
    transform(movies: number): number {
        return Math.round(movies);
    }
}