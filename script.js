let tl = gsap.timeline({ defaults: { ease: Expo.EaseOut } });

tl.from('.bg', { scale: 0.6, duration: 2, opacity: 0, delay: 0.2 })
	.to(
		'.text-reveal',
		{
			clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
			y: 0,
			stagger: 0.3,
			duration: 1,
		},
		'-=2.9',
	)
	.to('.text-reveal', {
		clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
		y: -200,
		stagger: 0.3,
		duration: 0.2,
		delay: 0.5,
	})
	.to('.text-reveal', {
		clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
		y: -200,
		stagger: 0.3,
		duration: 0.3,
		delay: 0.5,
	})
	.to('.fa-solid', {
		clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
		y: -150,
	})
	.to(
		'.beach',
		{
			clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
			y: 0,
			stagger: 0.3,
			opacity: 1,
			duration: 1,
		},
		'-=.4',
	);
