---
title: My contributions
---

# My Contributions

I've been a federal civil servant for over 16 years at the time of this writing,
and I had the good fortune recently to learn about a project I'd worked on years
ago that was starting to bear fruit. It got me thinking, I should document for
myself the public-facing impacts of my work, to the extent that I'm aware of
them. Work in this field can take a long time to show up, so it's good to sit
and think about how it has unfolded.

### Hurricane Katrina geospatial data

- Started: summer 2005
- Ended: officially summer 2006, but really lingered on through spring 2007
- Payoff: spring 2007

I built and ran the system that collected and published all of the geospatial
data collected during the study into the failure of flood control systems in and
around New Orleans after Hurricane Katrina. Ultimately most of the findings were
derived from written sources rather than anything in the geospatial data, but
there was one discovery that came from it.

> I didn't make this finding. I built the system that enabled the finding. My
> contribution here is pretty small, but it's not insignificant.

[LIDAR data](https://en.wikipedia.org/wiki/Lidar) from one of the canals showed
unexpected scarring and pitting in the concrete walls prior to the hurricane,
right at a point where the canal wall failed. The scarring was consistent with
a dredging ship not turning off its dredergs before turning around. The result
was big steel teeth grinding on the walls of the canal, potentially weakening
them. Ultimately this wasn't considered to be a major factor in the failure, but
it was significant enough that it made it into the [Interagency Performance
Evaluation Taskforce (IPET) report](https://biotech.law.lsu.edu/katrina/ipet/ipet.html),
in which I get a credit!

### Hurricane recovery

- Started: fall 2011
- Ended: sometime in 2013
- Payoff: fall 2016

After a hurricane with extensive roof damage, FEMA activates a program called
"BlueRoof," and that program is executed by the US Army Corps of Engineers
(USACE). This is the program that puts temporary blue tarps on roofs so people
can move back into their homes. Prior to our work in 2011, the program was
paper-driven. USACE staff set up temporary sign-up locations around the affected
area, people came and filled out forms, and then USACE staff took all the paper
forms back to their hotel rooms to enter the data into an electronic system.
Then, additional staff would be sent to the site to inspect it for eligibility
(for example, if the roof was too badly damaged, a tarp wouldn't be sufficient
so the home would be ineligible). They also verified the address and used a
handheld GPS device to record the geospatial coordinates.

The average time between someone filling out the form and getting a tarp was
about 3 weeks. That's bonkers. Congress was displeased, as they should have
been. So FEMA gave USACE money to build a digital system.

I was the sole developer on the forms part of the project, and another developer
did all of the backend work. We created two apps: an iPad app for USACE staff
to more quickly collect the appropriate information and submit it directly to
our backend systems, and an iPhone app for USACE staff to more quickly inspect
homes. We worked directly with field staff during several exercise events, and
made lots of changes over the course of a year or so. Then, the money dried up
because there wasn't a hurricane. Disaster preparedness is cheaper than disaster
recovery, but it's hard to convince Congress of that.

Anyway, in 2016, months after I'd left that job and _years_ after I'd touched
that project, I got a call that BlueRoof had been activated. And the average
time from filling out a form to getting a tarp? 3 days.

### Unaccompanied Children Portal

- Started: spring 2016
- Ended: fall 2016
- Payoff: fall 2023

The Department of Health and Human Services Administration of Childrens and
Families (ACF) is responsible for the safety and wellbeing of immigrant children
who cross into America unaccompanied by an adult. Their job is to keep the kids
safe and healthy while the immigration process does whatever it's going to do.

In 2016, we partnered with ACF to work on one of the IT systems they use to help
them do that job: UC Portal (or just "Portal" from here on). Portal was where
they kept kids' medical records, incident reports, placement information, court
dates, etc. Unfortunately, the system was riddled with data bugs, causing the
database to be full of garbage and, shockingly, sometimes losing track of kids
altogether. ACF case workers couldn't be sure who had the kids or that they were
safe. In one case, over two dozen kids were found [being forced to work on a
chicken farm](https://www.nbcnews.com/news/us-news/federal-agents-found-two-dozen-minors-working-ohio-poultry-plant-rcna121502).
And sadly, that wasn't an isolated case.

We did an intensive research session with ACF case workers to understand their
processes before looking at the software itself. When we examined the code, we
found shockingly bad practices throughout. It was in fact some of the worst code
I have ever seen. The static code analysis produced astoundingly bad numbers,
backed up by direct examination of the code. The single most complex and buggy
piece of code was that responsible for writing records to the database, which,
given the code's operational performance, wasn't too surprising, I guess.

Anyway, we weren't there to fix the code. We were there to identify the problem
and offer recommendations, so we did. We detailed the problem and laid out a few
options for remediation. Our strongest recommendation was a complete rewrite
built on top of a new database layer that would simultaneously handle both the
old and new systems.

But timing was not on our side. It was 2016, after all, and presidential
elections are disruptive. A lot of HHS political appointees left, stopping all
momentum on our work. And the new administration brought its own priorities.
Fixing POrtal just wasn't important to them anymore.

In the fall of 2023, I learned from a colleague that ACF was back to working on
Portal. In fact, they'd been at it for a couple of years. And while they weren't
completely replacing it, they had pulled out our old recommendations and were
adopting many of them – particularly the bits around shoring up the data writing
layers. As a result, records no longer disappear.

While it's still far from a perfect system, it's much better off than it was. It
doesn't crash. Children don't just disappear from the database. Medical records
don't get applied to the wrong kids, or duplicated under the right kids. Case
workers can tell if someone is sponsoring more kids than they should be.

### Others?

There are others that I haven't seen a payoff on yet, but the way government
work goes, I expect I will. I think my work with the Centers for Medicare and
Medicaid Services will pay off big time. (Actually, I think they already have
and I just haven't heard about it yet. We were on the cusp of some huge
breakthroughs right before our partnership ended, and CMS leadership was primed
to carry on without us.) And I think my ongoing work with the National Weather
Service is going to pay off _while I'm working on it_, which is going to be a
unique and wonderful moment in my career.
