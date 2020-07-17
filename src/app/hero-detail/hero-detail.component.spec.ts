import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeroDetailComponent } from './hero-detail.component';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from './../hero.service';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs/internal/observable/of';

describe('HeroDetailComponent', () => {
  let fixture: ComponentFixture<HeroDetailComponent>,
      mockActivatedRoute, mockHeroService, mockLocation;

  beforeEach(function() {
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: () => '3'
        }
      }
    }
    mockHeroService = jasmine.createSpyObj(['getHero', 'updateHero']);
    mockLocation = jasmine.createSpyObj(['back']);

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [HeroDetailComponent],
      providers: [
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: HeroService, useValue: mockHeroService},
        {provide: Location, useValue: mockLocation}
      ]
    });
    fixture = TestBed.createComponent(HeroDetailComponent);
    mockHeroService.getHero.and.returnValue(of({ id: 3, name: 'SuperDude', strength: 180 }));
  });

  it('', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h2').textContent).toContain('SUPERDUDE');
  });
});
